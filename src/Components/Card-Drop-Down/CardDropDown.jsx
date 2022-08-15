import "./CardDropDown.scss";

import Button from "../Button/Button";
import CartItem from "../Cart-Items/CartItem";

import { selectCartItems } from "../../store/cart/cart.selector";


import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIscartOpen } from "../../store/cart/cart.action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CardDropDown = () => {
    const navigate = useNavigate() 
    const dispatch = useDispatch()

    const isCartOpen = useSelector(selectIsCartOpen)
    const cartItems = useSelector(selectCartItems)

    


    const GoCheck = () => {
        dispatch(setIscartOpen(!isCartOpen))
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