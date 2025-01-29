import React from 'react'
import './Placeorder.css'
import { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'

const Placeorder = () => {
    const {gettotalcartamount}=useContext(StoreContext)
  return (
    <form className='placeorder'>
        
        <div className="placeorderleft">
            <p className="title">Delivery information</p>
            <div className="multifields">
                <input type="text" placeholder='firstname' />
                <input type="text" placeholder='lastname' />
            </div>
            <input type="email" placeholder='email addres' />
            <input type="text" placeholder='street' />
            <div className="multifields">
                <input type="text" placeholder='city' />
                <input type="text" placeholder='state' />
            </div>
            <div className="multifields">
                <input type="text" placeholder='zip code' />
                <input type="text" placeholder='country' />
            </div>
            <input type="text" placeholder='phone' />
        </div>
        <div className="placeorderright">
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
        </div>
    </form>
  )
}

export default Placeorder