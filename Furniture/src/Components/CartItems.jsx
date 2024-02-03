import { useContext } from "react"
import {ShopContext} from '../Context/Context'

export default function CartItems(){
    const {AllProducts, cart, removeFromCart} = useContext(ShopContext)
    
    return(
        <div>
         
        </div>
    )
}