import "./Product.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemsToCart } from "../../store/cart/cart.action";

const   Products = ({products}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const {name,price,imageUrl} = products;

    const addtocart = ()  => dispatch(addItemsToCart(cartItems,products))
    return ( 
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
            <Button buttonType='inverted' onClick={addtocart} >Add to Card</Button>
        </div>
     );
}
 
export default Products;