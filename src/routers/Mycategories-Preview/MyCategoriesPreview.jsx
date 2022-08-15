import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

import CategoryPreview from "../../Components/Categoty-Preview/CategoryPreview";

const Shop = () => {

    const products = useSelector(selectCategories)
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