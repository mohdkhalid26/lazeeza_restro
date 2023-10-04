import React, { useState } from "react";
import "./ContactUs.scss";
function ContactUs() {
  const [myClass, setMyClass] = useState("contact-hide");
  const setScroll = (()=>{
if (window.scrollY > 2700) {
  setMyClass("contact-show")
}
else if(window.scrollY < 2316) {
  setMyClass("contact-hide")  
}
  })
  window.addEventListener("scroll",setScroll)
  
  return (
    <>
    <div id="contact" className={myClass}>
      <h4 className="heading">CONTACT</h4>
      <iframe title="LAZEEZA PIZZA & RESTRO"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.946760506507!2d81.81220803661004!3d25.42709473711615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985352c8c64805b%3A0xf2b348f869b39f01!2sLazeeza%20pizza%20%26%20Restro.!5e0!3m2!1sen!2sin!4v1696397162436!5m2!1sen!2sin"
        
      ></iframe>

     </div>
    </>

  );
}

export default ContactUs;
