import "./Checkoutitem.scss";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const CheckOutItem = ({Items}) => {

    const {deleteItem,addItemsToCart,removeItem} = useContext(CartContext)
    const {name,price,quantity,imageUrl} = Items

    const itemdelete = () => deleteItem(Items)
    const additem = () => addItemsToCart(Items)
    const removeitem = () => removeItem(Items)

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