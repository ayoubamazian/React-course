import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import CategoryPreview from "../../Components/Categoty-Preview/CategoryPreview";

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return ( 
        <Fragment>
        {
            Object.keys(products).map((title) => {
                const product = products[title]
                return <CategoryPreview key={title} products={product} title={title} />
        })
        }
        </Fragment>
     );
}
 
export default Shop;