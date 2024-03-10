import Dashboard from "./component/backoffice/Dashboard";
import Homescreen from "./component/backoffice/Homescreen";
import Auth from "./component/frontoffice/Auth";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullFfront from "./component/frontoffice/FullFfront";
import Testdocument from "./component/frontoffice/Testdocument";
import TextEditor from "./component/frontoffice/TextEditor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<FullFfront />} />

          <Route path="/auth" element={<Auth />} />
          <Route path="/aa" element={<Homescreen />} />
          <Route path="/ccc" element={<FullFfront />} />
          <Route path="/test" element={<Testdocument />} />
          <Route path="/blocsConcept" element={<TextEditor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
