import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


import './shop.scss';

import { getCollectionandDocuments } from "../utils/Firebase";
import { setCategories } from "../store/categories/category.action";

import Category from "../routers/Category/Category";
import MyCategoriesPreview from "../routers/Mycategories-Preview/MyCategoriesPreview";

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        const getcategories = async () => {
            const collection = await getCollectionandDocuments()
            dispatch(setCategories(collection))
        }
        getcategories()
      },[dispatch])

    return ( 
        <Routes>
            <Route index element={<MyCategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
     );
}
 
export default Shop;