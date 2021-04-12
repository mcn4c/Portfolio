import React from "react";
import "./style.css"

function Project(props) {

    return (
    <div className="col-lg-4 card" key={props.id}>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <img className="image" src={props.image} alt={props.name} /><br/><br/>

    <div className="row">
      <div className="col-lg-6">
  {/* button link will not allow props, need to find other option */}
         
        <a href={props.codeLink}><button className="btn btn-link inline">View the code</button></a>
      </div>
      <div className="col-lg-6">
 {/* button link will not allow props, need to find other option */}
        <a href= {props.siteLink}><button className="btn btn-link inline">See
          live website</button></a>
      </div>
    </div>

  </div>
  );
};

export default Project; 