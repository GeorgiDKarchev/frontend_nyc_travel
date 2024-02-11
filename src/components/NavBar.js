import React from "react"
import {useState} from "react"
import "../index.css"
import {Link} from "react-router-dom"

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
                {/* On every click on menu item */}
                <li onClick={()=>{setMenu('home')}}><Link to ='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('home')}}><Link to ='/About'>About</Link>{menu==='about'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('tours')}}><Link to ='/AdditionalTours'>Additional Tours</Link>{menu==='tours'?<h/>:<></>}</li>
            </ul>
            <div className='login'>
                <img className = 'shopping-cart' src='https://static.vecteezy.com/system/resources/previews/000/356/583/original/vector-shopping-cart-icon.jpg'></img>
                <button>Log in</button>
            </div>

        </div>
    );
}



export default NavBar;
