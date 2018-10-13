import React from "react";
import { Link } from "react-router-dom"

const Nav = () =>
  <div className="navbar navbar-expand-lg navbar-light container-fluid">
    <div className="navbar">
      <a id="navbarlogo" href="/">
      <h3 className="navLink">New York Times Article Search and Save</h3>
      </a>
    </div>
    
    <div className="navbar-brand collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="nav">
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/saved" className="nav-item nav-link">
          Saved
        </Link>
      </div>
    </div>
  </div>
  ;

export default Nav;