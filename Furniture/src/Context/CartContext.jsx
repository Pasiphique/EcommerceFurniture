import React from "react";
import { createContext, useContext,useState } from "react";

const ShoppingCartContext = createContext({
    getItemQuantity: id => Number,
    increaseCartQuantity: id => Void,
    decreaseCartQuantity: id => Void,
    removeFromCart: id => Void,
    cartItems:Number,
    cartQantity:Number,
})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export default function ShoppingCartProvider({children}){
    const [cartItems, setCartItems] = useState([])

    function getItemQuantity(id){
        const item = cartItems.find(item => item.id === id)?.quantity
        return item == undefined ? 0: item
        
    }
    function increaseCartQuantity(id){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id) == null){ // if product not in cart
                return [...currItems, {id, quantity:1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){ // if product is in cart, add 1
                        return {...item, quantity: item.quantity +1}
                    }else{ // if not the product just keep it the same
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id){
        setCartItems(currItems =>{

            if(currItems.find(item => item.id === id)?.quantity === 1){
               return currItems.filter(item => item.id !== id)            
            }else{
                return currItems.map(item => {
                    if(item.id === id){ // if product is in cart, subtract 1
                        return {...item, quantity: item.quantity - 1}
                    }else{ // if not the product just keep it the same
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id){
        setCartItems(currItems=>{
           return  currItems.filter(item => item.id !== id)
        })
    }
    const cartQantity = cartItems.reduce(
        (quantity,item) => item.quantity + quantity, 0
    )

    return(
        
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems ,cartQantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}