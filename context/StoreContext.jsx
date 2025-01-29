import { createContext, useState } from "react";

export const StoreContext = createContext(null)
import { food_list } from "../components/Assets/assets";
import { useEffect } from "react";

const StoreContextProvider = (props) => {

    const [cartitems, setcartitems] = useState({})

    const addToCart = (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }
    const removeFromCart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))


    }
    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item]> 0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalamount += iteminfo.price * cartitems[item]
            }

        }
        return totalamount;
    }
    const contextValue = {
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        removeFromCart,
        gettotalcartamount

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}




export default StoreContextProvider