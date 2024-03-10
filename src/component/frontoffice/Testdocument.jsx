import React, { useCallback, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./TextEditor.css";
import ImageResize from "quill-image-resize";

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
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    Quill.register("modules/imageResize", ImageResize);

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, {
      theme: "snow",
      modules: { toolbar: toolbarOptions, imageResize: {} },
    });
  }, []);
  return (
    <main id="main" className="main">
      <div className="cc container" id="container" ref={wrapperRef}></div>;
    </main>
  );
};

export default Testdocument;
