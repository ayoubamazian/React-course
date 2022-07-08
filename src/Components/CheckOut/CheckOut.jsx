import "./CheckOut.scss"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckOut = () => {

    const {cartItems,addItemsToCart,removeItem} = useContext(CartContext)

    return ( 
        <div className="checkoutComponent">
            {cartItems.map((item)=>{    
                return(
                <div key={item.id}>
                    <img src={item.imageUrl} alt={`${item.name}`}/>
                    <p>{item.name}</p>
                    <span>{item.quantity}</span>
                    <br/>
                    <span onClick={() => addItemsToCart(item)}>increment</span><br/>
                    <span onClick={() => removeItem(item)}>decrement</span><br/>
                    <button>Delete</button>
                </div>
                )
            })}
        </div>
     );
}
 
export default CheckOut;