import React from 'react';
import MyPic from './Assets/portrait2.jpeg'

function About() {
	return (
		
<container>	
	<br /> <br />	
		
  <div className="row intro">
    <div className="col-lg-4 welcome">
      <h1> Welcome!</h1>
      <p className="intro-p">I'm Mary</p>
      <p className="intro-p">I'm a web developer who loves to bake</p>
     
    </div>

    <div className="col-lg-4">
      <img src={MyPic} alt="Photo of Mary Nash" className="pic" />
    </div>

    <div className="col-lg-4 future">
      <h1>Get in touch with me:</h1>
      <p className="intro-p">My email: mcn4c@virginia.edu</p>
      <p className="intro-p">My phone number: 434-806-8805</p>

    </div>



  </div>



  <div className="row">
    <div className="col-lg-12">
      <h1 style="text-align: center; text-decoration-line: underline;"> About Me</h1>


    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 about-me">
      <ul>
        <li>From Charlottesville, VA</li>
        <li>Am a UVA graduate and a current GW Coding Bootcamper</li>
      </ul>
      
    </div>
    <div className="col-lg-4 about-me">
      <ul>
        <li>Taught special education for five years</li>
        <li>Taught English in South Korea for four years</li>
      </ul>


    </div>
    <div className="col-lg-4 about-me">
	  <ul>
      <li>Front-End experience: HTML5, CSS3, JavaScript</li>
      <li>Back-end experience: NodeJS, Express, OOP, MySQL</li>
      </ul>

    </div>



  </div>
  <div className="row">
    <div className="col-lg-8">
      <h3 id="connect"><u> Connect With Me:</u></h3>

      <a className="button" href="https://www.linkedin.com/in/mary-nash-105b0885/" target="_blank"
        style={{textAlign:"center", color:"#713949", padding: "5px"}}>
        <i className="fab fa-linkedin" aria-hidden="true"></i>
      </a>

      <a className="button" href="https://github.com/mcn4c" target="_blank"
        style={{textAlign:"center", color:"#713949", padding: "5px"}}>
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
      <a className="button" href="https://www.facebook.com/marycaroline.nash/" target="_blank"
        style={{textAlign:"center", color:"#713949", padding: "5px"}}>
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
      </a>
      <a className="button" href="https://www.instagram.com/marycaroline.nash/" target="_blank"
        style={{textAlign: "center", color: "#713949", padding: "5px"}}>
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
      <a className="button" href="" target="_blank" style={{textAlign: "center", color: "#713949"}}>
        <i class="fab fa-twitter" aria-hidden="true"></i>
      </a>
    </div>
  </div>  
  </container>
	);
}
export default About;
