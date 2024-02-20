import Dashboard from "./component/backoffice/Dashboard";
import Homescreen from "./component/backoffice/Homescreen";
import Auth from "./component/frontoffice/Auth";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />} />

          <Route path="/aaa" element={<Auth />} />
          <Route path="/aa" element={<Homescreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
