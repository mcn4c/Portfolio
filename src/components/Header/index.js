import React from "react";


function Navbar () {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="index.html" style={{color: "white"}}>Mary Nash</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className=" nav navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="contact.html" style={{color: "white"}}>Contact <span
                className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="portfolio.html" style={{color: "white"}}>Portfolio</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="index.html" style={{color: "white"}}>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


    )
}

export default Navbar;