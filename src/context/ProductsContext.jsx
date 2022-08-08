import { createContext, useEffect, useState } from "react";

import { getCollectionandDocuments } from "../utils/Firebase";

export const ProductsContext = createContext({
    products:{}
})

export const ProductsProvider = ({children}) => {

    const [products,setProduct] = useState({});

    useEffect(()=>{
        const getcategories = async () => {
            const collection = await getCollectionandDocuments()
            setProduct(collection)
        }
        getcategories()
    },[])

    const value = {products};

    return <ProductsContext.Provider value={value}>
                {children}
            </ProductsContext.Provider>
}