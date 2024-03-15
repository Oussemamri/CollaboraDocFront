import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import '../../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../../../public/assets/vendor/quill/quill.snow.css';
import '../../../public/assets/vendor/quill/quill.bubble.css';
import '../../../public/assets/vendor/remixicon/remixicon.css';
import '../../../public/assets/vendor/simple-datatables/style.css';
import Testdocument from "../frontoffice/Testdocument";


function Homescreen() {
  return (
    <>
      <Header />
      <Testdocument/>
      <Sidebar />
      <Outlet />

      <Footer />

    
    </>
  );
}

export default Homescreen;
