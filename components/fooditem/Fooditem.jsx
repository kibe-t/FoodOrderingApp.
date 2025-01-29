import './Fooditem.css'
import { assets } from '../Assets/assets'
import { useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {
    
    
    const {cartitems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='fooditem'>
        <div className="itemimagecontainer">
            <img className='fooditemimage' src={image} alt="" />
            {!cartitems[id]
              ? <img onClick={()=>addToCart(id)} className='add' src={assets.add_icon_white} alt="" />
              : <div className='fooditemcounter'>
                   <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                   <p>{cartitems[id]}</p>
                   <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

                </div>

            }
        </div>
        <div className='fooditeminfo'>
            <div className='fooditemnamerating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='fooditemdesc'>{description}</p>
            <p className='fooditemprice'>${price}</p>

        </div>

    </div>
  )
}

export default Fooditem