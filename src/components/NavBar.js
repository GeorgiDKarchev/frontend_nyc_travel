import React from "react"
import {useState} from "react"
import "../index.css"

//Setting NavBar
const NavBar =()=>{
    //setting menu state
    const [menu,setMenu] = useState('selectTrip')
    return(
        <div className = 'navbar'>
            <div className='nycLogo'>
                <img className = 'logo-pic' src='https://th.bing.com/th/id/R.73b0d5950705dc343a8552079d256e50?rik=PnUlTMbKS2awvA&pid=ImgRaw&r=0'/>
                <p>Traveler</p>
            </div>
            <ul className='navMenu'>
                {/* On every click on menu item, a line will uppear under it */}
                <li onClick={()=>{setMenu('home')}}>Home{menu==='home'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('home')}}>About {menu==='about'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('tours')}}>Additional Tours{menu==='tours'?<h/>:<></>}</li>
            </ul>

        </div>
    )
}



export default NavBar;
