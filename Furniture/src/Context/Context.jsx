import React from "react"
import AllProducts from '../Components/Product/productItems.json'
import { createContext,useState} from "react"

export const ShopContext = createContext(null)
export default function ShopContextProvider(props){
        const [cart,setCartItems] = useState([])
      
        const addToCart =(productId)=>{
            const product = AllProducts.find(product => product.id == productId)
            const itemExists = cart.find(item => item.id == productId)
            if(!itemExists){
                const newItem = {
                    id: product.id,
                    src: product.src,
                        price: product.price, 
                        description: product.description,
                        count: 1,  
                }
                setCartItems([...cart, newItem])
            }            
        }
        const removeFromCart =(itemId)=>{
            const updatedProducts = cart.filter(product => product.id != itemId)
            setCartItems(updatedProducts)
        }
        const contextValue = {AllProducts, cart,addToCart,removeFromCart}
        return(
            <ShopContext.Provider value = {contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}