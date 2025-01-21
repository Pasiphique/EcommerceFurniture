import NavBar from './NavBar'
import Home from './Home/Home'
import Contact from './Contact'
import Shop from './Shop/Shop'
import Footer from './Footer'
import Cart from './Cart/Cart'
import './App.css'
import ShoppingCartProvider from './Context/CartContext'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDisplay from './Shop/ProductDisplay'
function App() {
  return (
    <ShoppingCartProvider>
      <Router>
      <div >
      <NavBar/>
      <div >
          <Routes>
            <Route exact path='/' element= {<Home />} />
            <Route path='/shop' element={<Shop />} /> 
            <Route path='/shop/product/:productId' element ={<ProductDisplay/>} >
            </Route>
            <Route path="/contact" element = {<Contact />} />
            <Route path='/cart' element={<Cart />} /> 

          </Routes>
         </div> 
        
      <Footer/>
      </div>
    </Router>
  </ShoppingCartProvider>
  )
}

export default App
