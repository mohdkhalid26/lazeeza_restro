import React from 'react'
import "./About.scss"
import hamzaImg from "../images/hamza.jpeg"
import restroImg from "../images/hamza2.jpeg"

function About() {
  return (
    <div className='about'><div className="img"><div className='one'><img src={hamzaImg} alt="" /><p><u>OWNER</u><br />MOHD HAMZA</p></div><div className='two'><img src={restroImg} alt="" /><p><u>OWNER</u><br />MOHD HAMZA</p></div></div><div className="data"><p>First paragraph: Tell your restaurant's story in a few words, what makes your place special, and why people should choose your business. <br />
    Second paragraph: Talk about your food. <br />
    Third paragraph: Describe to the clients the experience they will have at your restaurant.</p></div></div>
  )
}

export default About