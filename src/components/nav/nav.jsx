import React from "react";
import "./nav.scss";
import logo from '../../assets/Logo_Black.png'

export default function Navigation() {
  return (
    <nav className="navigation">

      <div className="logo">
          <img src={logo} alt="Logo" />
      </div>

      <div className="links">
        <a href="#home" className="link">Home</a>
        <a href="#expertise" className="link">Expertise</a>
        <a href="#process" className="link">Process</a>
        <a href="#project" className="link">Projets</a>
      </div>
    </nav>
  );
}
