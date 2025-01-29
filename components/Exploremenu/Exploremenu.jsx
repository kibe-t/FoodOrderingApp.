import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../Assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='exploremenutxt'>choose from our varirty of food  to satisfy your cravings nd elevate you during
        your expirience with us with  your favourite meal in our app</p>
        <div className='exploremenulist'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='exploremenulistitem'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
            

        </div>
        <hr />

    </div>
  )
}

export default Exploremenu