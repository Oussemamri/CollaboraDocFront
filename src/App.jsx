import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidV4 } from 'uuid';
import Dashboard from "./component/backoffice/Dashboard";
import Homescreen from "./component/backoffice/Homescreen";
import Auth from "./component/frontoffice/Auth";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import FullFfront from "./component/frontoffice/FullFfront";
import Testdocument from "./component/frontoffice/Testdocument";

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
          <Route path="/documents/:id" element={<Testdocument />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
