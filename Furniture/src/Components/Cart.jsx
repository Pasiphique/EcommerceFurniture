
import { Link } from "react-router-dom"
import CartItems from "./CartItems"
export default function Cart(){

    // idea is to have  products and their prices sent as a prop and then added to array
    return(

        <div>
            <CartItems />
            <button><Link to='/checkout'>Checkout</Link></button>
            <button>wowzers</button>
            <button>wowzers3</button>
            <button>oiehfg</button>
            <button>goifd</button>
        </div>
        
    )
}