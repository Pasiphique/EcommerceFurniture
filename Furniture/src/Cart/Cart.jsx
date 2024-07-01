
import CartItems from './CartItems'
import { useShoppingCart } from "../Context/CartContext"

import AllProducts from '../Products/productItems.json'
import { useEffect, useState } from 'react'
export default function Cart(){
    const {cartItems} = useShoppingCart()
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        const cartPrice= cartItems.reduce((accumulator,item)=>{
            const product = AllProducts.find(product => product.id === Number(item.id))
            console.log( Number(item.quantity) )
            console.log(product.price)
            return accumulator + (Number(item.quantity) * product.price)
        },0).toLocaleString('en-US');
        setTotal(cartPrice)
    },[cartItems])
   
    return(
        <>
            <CartItems cartItems={cartItems} AllProducts={AllProducts}/>
            <div>
                <h2>Cart Totals</h2>
                <p>
                    <span>SubTotal</span>
                    <span>${total}</span>
                </p>
                <p>
                    <span>Shipping Fee</span>
                    <span>Free</span>
                </p>
                <p>
                    <span>Total</span>
                    <span>${total}</span>
                </p>
              
            </div>
            <button>Checkout</button>           
            
        </>
        
    )
}
