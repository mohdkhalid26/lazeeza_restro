import React from 'react'
import "./App.css"
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import ContactUs from './pages/contactus/ContactUs'

function App() {
  return (
    <div className='app'>

<Navbar/>
<Home/>
<Gallery/>
<Menu/>
<About/>
<ContactUs/>

    </div>
  )
}

export default App