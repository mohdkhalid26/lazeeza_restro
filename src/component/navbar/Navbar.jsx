import React, {  useState } from 'react'
import "./Navbar.scss"
import logo from "./logo.png"
function Navbar() {
  const [navClass, setNavClass] = useState("navbar");
  const setScroll = (()=>{
    if (window.scrollY > 272) {
      setNavClass("navbar black-bg")
    } else {
      setNavClass("navbar")
    }
  })
  window.addEventListener("scroll",setScroll)
  
  return (
    <div  className={navClass}>
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
    <div className="options">
        <a href="#home"  className="span">Home</a>
        <a href="#gallery" className="span">Gallery</a>
        <a href="#menu" className="span">Menu</a>
        <a href="#about" className="span">About</a>
        <a href="#contact" className="span">Contact Us</a>
    </div>
    </div>
  )
}

export default Navbar