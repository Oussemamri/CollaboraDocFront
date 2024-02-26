import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

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
              <a href="#" className="btn">
                <i className="fa-regular fa-user"></i> Sign up
              </a>
              <a href="#" className="btn">
                <i className="fa-regular fa-user"></i> sign In
              </a>
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
