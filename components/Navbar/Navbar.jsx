import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../Assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setshowlogin}) => {
    const [menu, setmenu]=useState("home")
    const {gettotalcartamount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> 
        <ul className='navbarmenu'>
            <Link to="/" onClick={()=>setmenu("home")} className={menu==="home"? "active":""}>Home</Link>
            <a href='#exploremenu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#appdownload' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className='navbarright'>
           <img src={assets.search_icon} alt="" />
            <div className='navbarsearchicon'>
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={gettotalcartamount()===0?"":"dot"}></div>
            </div>
            <div>
                <button onClick={()=>setshowlogin(true)}>Sign in</button>
            </div>

           

        </div>
    </div>
  )
}

export default Navbar