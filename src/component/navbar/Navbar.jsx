import React, {  useState } from 'react'
import "./Navbar.scss"
import logo from "./logo.png"
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const setScroll = (()=>{
    setScrollPosition(window.scrollY)
  })
  window.addEventListener("scroll",setScroll)
  
  return (
    <div  className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
    <div className="options">
        <span>Home</span>
        <span>Gallery</span>
        <span>Menu</span>
        <span>About</span>
        <span>Contact Us</span>
    </div>
    </div>
  )
}

export default Navbar