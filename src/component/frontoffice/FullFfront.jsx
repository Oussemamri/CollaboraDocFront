import React from "react";
import Header from "../frontoffice/Header";
import Hero from "../frontoffice/Hero";
import Resume from "./Resume";
import Service from "./Service";
import "./FullFfront.css";

const FullFfront = () => {
  return (
      <div className="ayhaja">
        <Header />
        <Hero />
        <Resume />
        <Service />
      </div>
  );
};

export default FullFfront;
