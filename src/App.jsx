import React from 'react'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"
import Footer from "./component/Footer/Footer"
import About from "./component/About/About"
import Venues from './component/Venues/Venues'
import Gallery from './component/Gallery/Gallery'
import Contact from './component/Contactus/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/> 
      <Route path="/Venues" element={<Venues/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App

