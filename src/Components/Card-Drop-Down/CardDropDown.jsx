import "./CardDropDown.scss";

import Button from "../Button/Button";
import CartItem from "../Cart-Items/CartItem";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CardDropDown = () => {
    const navigate = useNavigate() 

    const {cartItems,setisCartOpen,isCartOpen} = useContext(CartContext)

    const GoCheck = () => {
        setisCartOpen(!isCartOpen)
        navigate('/checkout',{replace:true})
    }

    return ( 
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} Cartitem={item}/>)}
            </div>
            <Button onClick={GoCheck}>GO CHECKOUT</Button>
        </div>
     );
}
 
export default CardDropDown;