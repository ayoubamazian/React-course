import "./Product.scss";
import Button from "../Button/Button";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Products = ({products}) => {
    const {name,price,imageUrl} = products;
    const {addItemsToCart} = useContext(CartContext)

    const addtocart = ()  => addItemsToCart(products)
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