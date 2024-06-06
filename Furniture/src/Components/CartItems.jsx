import { useContext, useState } from "react"
import {ShopContext} from '../Context/Context'

export default function CartItems(){
    const { cart, removeFromCart} = useContext(ShopContext)
    const [quantity, setQuantity] = useState(1)
   
    return(
        <div>
          {cart.map((item) =>{
            return(
                <div key={item.id}>
                     <img src={item.src}/>
                     <div>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        <button onClick={()=>removeFromCart(item.id)}>Delete</button>
                    </div>
                </div>
        )
          })}
        </div>
    )
}