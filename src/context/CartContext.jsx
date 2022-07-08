import { createContext,useState } from "react";

const addCartitem = (cartItems,product) => {
    const existItem = cartItems.find((cartitem)=> cartitem.id === product.id)

    if(existItem){
        return cartItems.map((cartitem) => cartitem.id === product.id ?
        {...cartitem, quantity:cartitem.quantity + 1}
        :
        cartitem
        )
    }

    return [...cartItems,{...product, quantity:1}]
}

const removeItems = (cartItems,itemToremove) => {
    const existItem = cartItems.find((cartitem)=> cartitem.id === itemToremove.id)

    if(existItem.quantity === 1){
        return cartItems.filter((cartitem) => cartitem.id !== itemToremove.id)
    }

    return cartItems.map((cartitem) => cartitem.id === itemToremove.id ?
    {...cartitem, quantity:cartitem.quantity - 1}
    :
    cartitem
    )
}

export const CartContext = createContext({
    isCartOpen:false,
    setisCartOpen:()=>{},
    cartItems:[],
    addItemsToCart:()=>{},
    quantity: 0,
    setQuantity: () => {},
    removeItem: ()=> {}
})

export const CartProvirder = ({children}) =>{

    const [isCartOpen,setisCartOpen] = useState(false)
    const [cartItems,setcartItems] = useState([])
    const [quantity,setQuantity] = useState(0);

    const addItemsToCart = (productToadd) =>{
        setcartItems(addCartitem(cartItems,productToadd))
        setQuantity(quantity+1);
    }

    const removeItem = (itemToremove) =>{
        setcartItems(removeItems(cartItems,itemToremove))
        setQuantity(quantity-1)
    }

    const value = {isCartOpen,setisCartOpen,cartItems,addItemsToCart,quantity,setQuantity,removeItem}


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}