import "./Checkoutitem.scss";

import { addItemsToCart,removeItem,deleteItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";



const CheckOutItem = ({Items}) => {
    const dispatch = useDispatch()
    const {name,price,quantity,imageUrl} = Items

    const cartItems = useSelector(selectCartItems)

    const itemdelete = () => dispatch(deleteItem(cartItems,Items))
    const additem = () => dispatch(addItemsToCart(cartItems,Items))
    const removeitem = () => dispatch(removeItem(cartItems,Items))

    return ( 
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeitem}>&#10096;</div>
                {quantity}
                <div className="arrow" onClick={additem}>&#10097;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={itemdelete}>&#10005;</div>
        </div>
     );
}
 
export default CheckOutItem;