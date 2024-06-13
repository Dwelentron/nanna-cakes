import { useState } from 'react'
import './App.css'
import Header from './assets/Comp/Header'
import {BrowserRouter, Route ,Routes } from 'react-router-dom'
import {CartProvider}from 'react-use-cart'
import Cart from './assets/Comp/Cart'
import Home from './assets/Comp/Home'
import Footer from './assets/Comp/Footer'

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<Home />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
      
    </CartProvider>
  )
}

export default App
