import { Route, Routes } from "react-router-dom";

import './shop.scss';

import Category from "../routers/Category/Category";
import MyCategoriesPreview from "../routers/Mycategories-Preview/MyCategoriesPreview";

const Shop = () => {
    return ( 
        <Routes>
            <Route index element={<MyCategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
     );
}
 
export default Shop;