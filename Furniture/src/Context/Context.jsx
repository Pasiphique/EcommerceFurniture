import React from "react"
import AllProducts from '../Components/Product/productItems.json'
import { createContext,useState} from "react"

export const ShopContext = createContext(null)
const defaultCart = []
export default function ShopContextProvider(props){
        const [cart,setCartItems] = useState(defaultCart)
        
        const addToCart =(itemId)=>{
            const product = AllProducts[itemId]
            setCartItems((prev)=>{
                
                if(isNaN(prev[itemId])){
                    const newItem = {
                        id: product.id,
                        src: product.src,
                         price: product.price, 
                         description: product.description,
                         count: 1,  
                    }
                    return ({...prev, newItem})
                }
                             
            })
            console.log(cart)
                
        }
        const removeFromCart =(itemId)=>{
            setCartItems((prev)=>([{...prev, [itemId]:prev[itemId]-1}]))
        }
        const contextValue = {AllProducts, cart,addToCart,removeFromCart}
        return(
            <ShopContext.Provider value = {contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}