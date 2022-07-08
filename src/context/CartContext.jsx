import { createContext,useEffect,useState } from "react";

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

const deleteItems = (cartItems,itemTodelete) => {
    const existItem = cartItems.find((cartitem)=> cartitem.id === itemTodelete.id)

    if(existItem){
        return cartItems.filter((cartitem) => cartitem.id !== itemTodelete.id);
    }
}

export const CartContext = createContext({
    isCartOpen:false,
    setisCartOpen:()=>{},
    cartItems:[],
    addItemsToCart:()=>{},
    quantity: 0,
    removeItem: ()=> {},
    deleteItem: ()=> {},
    total:0,
})

export const CartProvirder = ({children}) =>{

    const [isCartOpen,setisCartOpen] = useState(false)
    const [cartItems,setcartItems] = useState([])
    const [quantity,setQuantity] = useState(0);
    const [total,setTotal] = useState(0)

    useEffect(() => {
        const newCartquantity = cartItems.reduce(
            (quantity,cartitem) => quantity + cartitem.quantity,
            0
        )
        setQuantity(newCartquantity)
    },[cartItems])

    useEffect(() => {
        const newtotal = cartItems.reduce(
            (total,cartitem) => total + cartitem.quantity*cartitem.price,
            0
        )
        setTotal(newtotal)
    },[cartItems])

    const addItemsToCart = (productToadd) =>{
        setcartItems(addCartitem(cartItems,productToadd))
    }

    const removeItem = (itemToremove) =>{
        setcartItems(removeItems(cartItems,itemToremove))
    }

    const deleteItem = (itemTodelete) => {
        setcartItems(deleteItems(cartItems,itemTodelete));
    }

    const value = {isCartOpen,setisCartOpen,cartItems,addItemsToCart,quantity,removeItem,deleteItem,total}


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}