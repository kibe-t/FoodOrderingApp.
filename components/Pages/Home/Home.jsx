import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Exploremenu from '../../Exploremenu/Exploremenu'
import Fooddisplay from '../../Fooddisplay/Fooddisplay'
import Appdownload from '../../appdownload/Appdownload'


const Home = () => {
    const [category, setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <Fooddisplay category={category}/>
        <Appdownload/>
        
    </div>
  )
}

export default Home