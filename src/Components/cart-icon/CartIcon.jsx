import "./CartIcon.scss"
import {ReactComponent as Shoppingbag} from "../../assets/shoppingbag.svg";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartIcon = () => {
    const {isCartOpen,setisCartOpen} = useContext(CartContext)

    const toggel = () =>{
        setisCartOpen(!isCartOpen)
    }
    return ( 
        <div className="cart-icon-container" onClick={toggel}>
            <Shoppingbag className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
     );
}
 
export default CartIcon;