import React from 'react'
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Application from './Components/Service/Application';
import Web from './Components/Service/Web';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQ from './Components/Faq/FAQ';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Web' element={<Web/>}/>
      <Route path='/Application' element={<Application/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='FAQ' element={<FAQ/>}/>
      



    </Routes>
    <Footer/>
    </BrowserRouter>
    

  )
}

export default App