import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartitems,food_list,removeFromCart,gettotalcartamount}=useContext(StoreContext)
  const navigate= useNavigate()
  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitemstitle">
          <p>Items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitems[item._id]>0)
          {
            return(
             <div>
              <div className="cartitemstitle cartitemsitem">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>${item.price*cartitems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
             </div>
            )
          }
        })}
      </div>
      <div className="cartbottom">
        <div className="carttotal">
          <h2>cart total</h2>
          <div>
            <div className="carttotaldetails">
              <p>subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <p>delivery fee</p>
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <b>total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartpromocode">
          <p>if you have promocode enter here</p>
          <div className="cartpromocodeinput">
            <input type="text" placeholder='promocode' />
            <button>submit</button>
          </div>
        </div>
        
      </div>
    
    </div>
  )
}

export default Cart