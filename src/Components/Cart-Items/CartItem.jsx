import "./CartItem.scss";

const CartItem = ({Cartitem}) => {
    const {name,quantity,price,imageUrl} = Cartitem;
    return ( 
        <div className="cart-item-container">
            <img src={imageUrl} alt={name}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="name">{quantity} * ${price}</span>
            </div>
        </div>
     );
}
 
export default CartItem;