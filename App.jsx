import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/home/home'
import Cart from './components/Pages/Cart/Cart'
import Footer from './components/footer/Footer'
import Loginpopup from './components/loginpopup/Loginpopup'
import Placeorder from './components/Pages/placeorder/Placeorder'

const App = () => {
  const [showlogin, setshowlogin]=useState(false)
  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
     <div className='App'>
       <Navbar setshowlogin={setshowlogin}/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        
        </Routes>
      </div>
     <Footer/>
    </>
   
  )
}

export default App
