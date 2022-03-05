import React from 'react';
import Logo from "./logo.png";

function Navbar(props){
    return (
            
        <div id="navbar">
            <span class="navitem">Home</span>
            <span class="navitem">Events</span>
            <img src={Logo} alt = "Image present"/>
            <span class="navitem">Gallery</span>
            <span class="navitem">About Us</span>

        </div>
    );
}

export default Navbar;