import React from 'react'
import './Appdownload.css'
import { assets } from '../Assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Expirience Download <br />Tomato App</p>
        <div className="appdownloadplartforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
        

    </div>
  )
}

export default Appdownload