import React from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom"




const LandingPage = () => {
    return (
        <div className="LandingPage">
          

            <div className="tittle" >
                {/* <img src="https://fontmeme.com/temporary/eefec5b78cb14fc8aebfb764b3c8c475.png" alt="mundo pokemos" /> */}
            </div>
            <Link to = "/home">
                <button className="buttonImage" ><img src="https://fontmeme.com/permalink/230221/5421cc0bd4301165f3247838ceb71ee9.png" alt="" /></button>
            </Link>

          
        </div>

    )
}

export default LandingPage;