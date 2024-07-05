
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
        <div className='cart-container'>
            <CartItems cartItems={cartItems} AllProducts={AllProducts}/>
            {cartItems.length == 0? 
            (<p>Your Funiro Shopping Cart is empty</p>)
                : (
                <div className='cart-totals'>
                    <h2>Cart Totals</h2>

                    <div>
                        <p>
                            <span>SubTotal: ${total} </span>
                        </p>
                        <p>
                            <span>Shipping Fee: Free</span>
                        </p>
                        <p>
                            <span>Total:${total} </span>
                        </p>
                    </div>
                
                    <button>Checkout</button>
                </div>
            ) }
            
                       
            
        </div>
        
    )
}
