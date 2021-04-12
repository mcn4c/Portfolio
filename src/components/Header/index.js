import React from "react";
import "./style.css"
import { Link } from "react-router-dom";



function Navbar () {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link 
    to = "/"
    className={
      window.location.pathname === "/" || window.location.pathname === "/about"
        ? "nav-link active"
        : "nav-link"
    }
    >
      Mary Nash
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className=" nav navbar-nav ml-auto">
          <li className="nav-item active">
            <Link 
            to="/contact" 
            className= {
              window.location.pathname === "/contact"
              ? "nav-link active"
              : "nav-link"
          }
        >
        Contact 
        </Link>
          </li>
          <li className="nav-item active">
            <Link 
            to= "/portfolio" className={
              window.location.pathname === "/portfolio" ?
              "nav-link active" :
              "nav-link"}>
                Portfolio
                </Link>
          </li>
          <li className="nav-item active">
            <Link 
            to="/about" className={
              window.location.pathname === "/" || window.location.pathname === "/about"
              ? "nav-link active"
              :"nav-link"}
              >
                About
                </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


    )
}

export default Navbar;