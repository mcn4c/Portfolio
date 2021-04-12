import React from "react";
import "./style.css"


function Contact() {

    return (

<div className=" container">
    <div className="row">
         <div className="col-lg-7 col-sm-9">
            <div className="card">
        
        <div className="card-body">
         <h1> Contact</h1>
         <hr />

    <form>
                                                 
     <div className="form-group">
     <label for="formGroupExampleInput" style={{color: "black"}}>Name</label>
    
        <input type="text" className="form-control"
        id="formGroupExampleInput" placeholder="Name" />
    </div>

    <div className="form-group">
     <label for="formGroupExampleInput2"style={{color: "black"}}>Email</label>
        <input type="text" className="form-control"
        id="formGroupExampleInput2" placeholder="Email" />
    </div>

     <div className="form-group">
     <label for="formGroupExampleInput2" style={{color: "black"}}>Message</label>
        <input type="text" className="form-control"
    id="formGroupExampleInput2" placeholder="Message" />
     </div><br />
     
                                                 
 <button type="submit" className="btn btn-primary">Submit</button>
 </form>


        </div>
        </div>
    </div>
</div>
<br />
</div>

    )
}

export default Contact;