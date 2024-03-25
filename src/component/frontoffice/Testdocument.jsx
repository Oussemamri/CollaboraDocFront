import React, { useCallback, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./TextEditor.css";
import ImageResize from "quill-image-resize";
import { io } from "socket.io-client"
import { Outlet, useParams } from "react-router-dom";
import Comment from "./comment";
import DrawerExample from "./DrawerExample";
import Header from "../backoffice/Header";
import Sidebar from "../backoffice/Sidebar";
import Footer from "../backoffice/Footer";

const SAVE_INTERVAL_MS = 2000

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // headers
  [{ list: "ordered" }, { list: "bullet" }], // lists
  [{ indent: "-1" }, { indent: "+1" }], // indentations
  [{ color: [] }, { background: [] }], // color options
  [{ align: [] }], // text alignment
  ["link", "image", "video"], // link, image, and video insertion
  [{ font: [] }], // font family
  [{ size: ["small", false, "large", "huge"] }], // font size
  ["clean"], // remove formatting button
];

const Testdocument = () => {
  const { id: documentId } = useParams()
  const [socket, setSocket] = useState()
  const [quill, setQuill] = useState()
  console.log(documentId)

  useEffect(() => {
    const s = io('http://localhost:3000');
    setSocket(s)

    s.on('connect', function () {
      console.log('Connected');

    })
    return () => {
      s.disconnect()
    }
  }, [])


  useEffect(() => {
    if (socket == null || quill == null) return
    socket.once("load-document", document => {
      quill.setContents(document)
      quill.enable()
    })
    socket.emit('get-document', documentId)

  }, [socket, quill, documentId])

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== 'user') return;
      socket.emit('send-changes', delta);
    };


    quill.on('text-change', handler);

    return () => {
      quill.off('text-change', handler);
    };
  }, [socket, quill]);



  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      quill.updateContents(delta)
    };



    socket.on('receive-changes', handler);

    return () => {
      socket.off('receive-changes', handler);
    };
  }, [socket, quill]);


  //AUTO_SAVE
  useEffect(() => {
    if (socket == null || quill == null) return
    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }

  }, [socket, quill])




  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    Quill.register("modules/imageResize", ImageResize);

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: toolbarOptions, imageResize: {} },
    });
    q.disable()
    q.setText('loading')
    setQuill(q)
  }, []);


 return (
  <>
 <div className="cc container" id="container" ref={wrapperRef}>  </div>
 <DrawerExample/>
   <Header />
      <Sidebar />
      <Outlet />
      <div id="main"> <div className="cc container" id="container" ref={wrapperRef}>  </div>
</div>
<Comment/>
      <Footer />

</>
);
};

export default Testdocument;
