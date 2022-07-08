import "./CheckOut.scss"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CheckOutItem from "../Checkout-Item/CheckOutItem";

const CheckOut = () => {

    const {cartItems,total} = useContext(CartContext)

    return ( 
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item)=>{    
                return <CheckOutItem key={item.id} Items={item} />
            })}
            <span className="total">${total}</span>
        </div>
     );
}
 
export default CheckOut;