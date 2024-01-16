import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import './App.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className='container'>
    <NavBar/>
      <div className='content'>
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </div>
    <Footer/>
    </div>
  </Router>
  )
}

export default App
