import React from "react";
import insta from '../assets/insta.jpeg'
import facebook from '../assets/facebook.jpeg'

const Footer = () =>{
    return (
        <div className = 'footer'>
            <>Tours</>
             <ul className = 'footer-links'>
                 <li>Company</li>
                 <li>About</li>
                 <li>Contact</li> 
             </ul>
            <div>
                <div className="insta">
                    <img src={insta} alt=""/>
                </div>
                <div className="facebook">
                    <img src={facebook} alt=""/> 
                </div>
                <div className="copyright">
                    <p>Copyright  @2024 All Rigth reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer