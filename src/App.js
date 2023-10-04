import React from 'react'
import "./App.css"
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import ContactUs from './pages/contactus/ContactUs'
import Footer from './component/footer/Footer'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className='app'>
<BrowserRouter>


<Navbar/>
<Home/>
<Gallery/>
<Menu/>
<About/>
<ContactUs/>
<Footer/>
</BrowserRouter>
    </div>
  )
}

export default App