import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../Assets/assets'

const Loginpopup = ({setshowlogin}) => {
    const [currentstate,setcurrentstate]=useState("login")
  return (
    <div className='loginpopup'>
        <form className='loginpopupcontainer'>
            <div className="loginpopuptitle">
                <h2>{currentstate}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="loginpopupinputs">
                {currentstate==="login"?<></>:<input type="text" placeholder='your name' required />}
                <input type="email" placeholder='your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currentstate==="Signup"?"create account":"login"}</button>
            <div className="loginpopupcond">
                <input type="checkbox" required/>
                <p>by continouing ,i agree by the terms of use & policy</p>
            </div>
            {currentstate==="login"
            ?<p>Create a new account? <span onClick={()=>setcurrentstate("Signup")}>click here</span></p>
            :<p>Already have an account? <span onClick={()=>setcurrentstate("login")}>login here</span></p>
            }
           
            
        </form>

    </div>
  )
}

export default Loginpopup