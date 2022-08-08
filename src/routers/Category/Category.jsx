import './Category.scss';

import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useState, useEffect, Fragment } from 'react';

import Products from "../../Components/product-card/Products";

const Category = () => {
    const {category} = useParams()
    const {products} = useContext(ProductsContext)
    const [product, setP] = useState(products[category])
    
    useEffect(()=>{
        setP(products[category])
    },[category,products])

    return(
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-containers'>
            {product &&
                product.map((p) => <Products key={p.id} products={p} />)
            }
        </div>
        </Fragment>
    )
}
 
export default Category;