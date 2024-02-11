import React from "react"
import {useState} from "react"
import "../index.css"

//Setting NavBar
const NavBar =()=>{
    //setting menu state
    const [menu,setMenu] = useState('selectTrip')
    return(
        <div className = 'navbar'>


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
