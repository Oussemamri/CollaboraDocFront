import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidV4 } from 'uuid';
import Dashboard from "./component/backoffice/Dashboard";
import Homescreen from "./component/backoffice/Homescreen";
import Auth from "./component/frontoffice/Auth";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import FullFfront from "./component/frontoffice/FullFfront";
import Testdocument from "./component/frontoffice/Testdocument";
<<<<<<< HEAD
import TextEditor from "./component/frontoffice/TextEditor";
=======
import CommentComponent from "./component/frontoffice/comment";
>>>>>>> 1249d2121ccc56397b64880ca99acd6486415cd0

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<FullFfront />} /> */}
          <Route path="/">
            <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
          </Route>

          <Route path="/auth" element={<Auth />} />
          <Route path="/aa" element={<Homescreen />} />
          <Route path="/ccc" element={<FullFfront />} />
<<<<<<< HEAD
          <Route path="/test" element={<Testdocument />} />
          <Route path="/blocsConcept" element={<TextEditor />} />
=======
          <Route path="/documents/:id" element={<Testdocument /> } />
>>>>>>> 1249d2121ccc56397b64880ca99acd6486415cd0
        </Routes>
      </BrowserRouter>
     

    </>
  );
}

export default App;
