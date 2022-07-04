import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

import Products from "../Components/product-card/Products";
import './shop.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return ( 
            <div className="products-container">
                {products.map((product)=>{
                    return <Products key={product.id} products={product} />
                })}
            </div>
     );
}
 
export default Shop;