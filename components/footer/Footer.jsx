import React from 'react'
import './Footer.css'
import { assets } from '../Assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footercontent">
            <div className="footercontentleft">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores magni deleniti dolore accusantium placeat nostrum, quibusdam nulla veritatis vitae, odit et velit qui impedit distinctio enim error? Corporis, doloribus!</p>
                <div className="footersocialicons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footercontentcenter">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footercontentright">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0717942690</li>
                    <li>kibetevans78@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footercopyright'>Copyright 2024 c  Tomato.com All rights reserved</p>

    </div>
  )
}

export default Footer