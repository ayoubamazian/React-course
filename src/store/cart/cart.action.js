import { createAction } from "../../utils/ReducerAction";
import { USER_ACTION_TYPES } from "./cart.types";

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




export const setIscartOpen = (bool) => createAction(USER_ACTION_TYPES.SET_IS_CART_OPEN, bool)

export const addItemsToCart = (cartItems, productToadd) =>{
    const newCartItems = addCartitem(cartItems,productToadd)
    return createAction(USER_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
 }

export const removeItem = (cartItems, itemToremove) =>{
     const newCartItems = removeItems(cartItems,itemToremove)
     return createAction(USER_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const deleteItem = (cartItems, itemTodelete) => {
     const newCartItems = deleteItems(cartItems,itemTodelete)
     return createAction(USER_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
 }
