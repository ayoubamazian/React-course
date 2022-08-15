import "./CartIcon.scss"
import {ReactComponent as Shoppingbag} from "../../assets/shoppingbag.svg";
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIscartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
    const dispatch = useDispatch()

    const quantity = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggel = () =>{
        dispatch(setIscartOpen(!isCartOpen))
    }
    return ( 
        <div className="cart-icon-container" onClick={toggel}>
            <Shoppingbag className="shopping-icon"/>
            <span className="item-count">{quantity}</span>
        </div>
     );
}
 
export default CartIcon;