import Products from "../product-card/Products";
import "./CategoryPreview.scss"

import { Link } from "react-router-dom";

const CategoryPreview = ( {title, products} ) => {
    return ( 
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products
                    .filter((_,idx) => idx < 4)
                    .map((product) => <Products key={product.id} products={product} />)
                }
            </div>
        </div>
     );
}
 
export default CategoryPreview;