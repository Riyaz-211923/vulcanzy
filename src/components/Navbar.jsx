// import React from 'react';
// import Logo from "./logo.png";

// function Navbar(props){
//     return (
            
//         <div id="navbar">
//             <span class="navitem">Home</span>
//             <span class="navitem">Events</span>
//             <img src={Logo} className="vulcanzy-logo" alt = "Vulcanzy Logo"/>
//             <span class="navitem">Gallery</span>
//             <span class="navitem">About Us</span>

//         </div>
//     );
// }

// export default Navbar;

import Logo from "./logo.png";
import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="parent3">
    <div
      className={`navbar ${
        !toggle ? "h-20" : "h-96"
      } `}
    >
      <span className="nav-brand md:order-1">
        <img src={Logo} alt="Vulcanzy Logo" />
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
        <i class="fa-solid fa-bars"></i>
        </button>
      </span>
      <span className="nav-item">
        Home
      </span>
      <span className="nav-item">
        Events
      </span>
      <span className="nav-item md:order-2">
        Gallery
      </span>
      <span className="nav-item md:order-2">
        About Us
      </span>
    </div>
    </div>
  );
}

export default Navbar;