import React from "react";

function Project(props) {

    return (
    <div className="col-lg-4 card" key={props.id}>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <img className="image" src={props.image} alt={props.name} /><br/><br/>

    <div className="row">
      <div className="col-lg-6">
  {/* button link will not allow props, need to find other option */}
         
        <button className="btn btn-link inline"
          onclick="window.location.href = {props.codeLink}">View the code</button>
      </div>
      <div className="col-lg-6">
 {/* button link will not allow props, need to find other option */}
        <button className="btn btn-link inline"
          onclick="window.location.href = {props.siteLink}">See
          live website</button>
      </div>
    </div>

  </div>
  );
};

export default Project; 