
import { Link } from "react-router-dom"
export default function Cart(){
    return(
        <div>
            <CartItems />
            <button><Link to='/checkout'>Checkout</Link></button>
            <button>wowzers</button>
            <button>wowzers3</button>
            <button>oiehfg</button>
        </div>
        
    )
}