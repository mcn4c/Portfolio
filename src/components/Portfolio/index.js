import React from "react";
import Project from "../Project"
import projectsA from "../../projectsA.json";
import projectsB from "../../projectsB.json";


function Portfolio() {

    return (

<div className="container">
    <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">    
                    <h1>Portfolio</h1>                    
                    <hr/>             
                </div>
                
                <div className="row">

            {projectsA.map(result => (
                <Project 
                    id = {result.id}
                    image = {result.image}
                    title = {result.title}
                    description = {result.description}
                    deployed = {result.deployed}
                    github = {result.github}
                />
            ))}

                </div>

                <div className="row projectsB">
            {projectsB.map(result => (
                <Project 
                    id = {result.id}
                    image = {result.image}
                    title = {result.title}
                    description = {result.description}
                    deployed = {result.deployed}
                    github = {result.github}
                />
            ))}        




                </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/><br/><br/>  
  </div>       

 


    )
}

export default Portfolio;