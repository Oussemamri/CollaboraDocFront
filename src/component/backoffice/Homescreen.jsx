import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

function Homescreen() {
  return (
    <>
      <Header />
      <Dashboard></Dashboard>
      <Sidebar />
      <Outlet />

      <Footer />

    
    </>
  );
}

export default Homescreen;
