import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Checkout from './Components/Product/Checkout'
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
          <Route path="/contact" element = {<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    <Footer/>
    </div>
  </Router>
  )
}

export default App
