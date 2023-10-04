import React, { useState } from 'react'
import "./Footer.scss"
import {BsInstagram} from "react-icons/bs"
import {BiLogoGmail,BiSolidPhoneCall} from "react-icons/bi"


import { NavLink } from 'react-router-dom'
function Footer() {
    const [myClass, setMyClass] = useState("footer-hide");
  const setScroll = (()=>{
    if (window.scrollY > 2804) {
      setMyClass("footer-show")
    } else if (window.scrollY < 2860){
      setMyClass("footer-hide")
    }
  })
  window.addEventListener("scroll",setScroll)
  
  return (
    <footer className={myClass}>
<div className="copyright"><span>
&copy;</span> 2023 Mohd Khalid
</div>
<div className="social"><NavLink target='_blank' to="https://www.instagram.com/mohd_khalid_26" className="insta"><BsInstagram/></NavLink></div>
<div className="contact">
    <NavLink target='_blank' to="mailto:mohdkhalid211003@gmail.com" className="email"><BiLogoGmail/></NavLink>
<NavLink target='_blank' className="number" to="tel:+918303388143" ><BiSolidPhoneCall/></NavLink>
</div>
<NavLink target='_blank' to="https://maps.app.goo.gl/9EmAbWxusazhnD1p7" className="address">
B Block, Kareli, Prayagraj, Daiwghat, Uttar Pradesh 211016
</NavLink>

    </footer>
    )
}

export default Footer