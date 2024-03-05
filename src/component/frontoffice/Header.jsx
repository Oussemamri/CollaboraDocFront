import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/auth/user");
        setUser(`${data.firstname} ${data.lastname}`);
        console.log("User data:", data);
        console.log(user)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <img
            src="/public/assets_front/image/lastlogo-removebg-preview.png"
            alt=""
            height="80"
            width="100"
          />
          <nav>
            <ul className={`main-menu ${isActive ? "active" : ""}`} id="list">
              <li className="close" onClick={toggleMenu}>
                <i className="fa-solid fa-xmark"></i>
              </li>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li className="menu">
                <a href="#">
                  Service <i className="fas fa-plus"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Service List</a>
                  </li>
                  <li>
                    <a href="#">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <a href="#">
                  Portfolio <i className="fas fa-plus"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Portfolio List</a>
                  </li>
                  <li>
                    <a href="#">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <a href="#">
                  Blogs <i className="fas fa-plus"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Blog List</a>
                  </li>
                  <li>
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              {user ? (
                <span>Welcome, {user}</span>
              ) : (
                <Link to="/auth" className="btn">
                  <i className="fa-regular fa-user"></i> Sign In
                </Link>
              )}
            </ul>
          </nav>
          <div className="bar" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
