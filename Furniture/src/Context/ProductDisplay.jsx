
import { useContext } from "react"
import { ShopContext } from "./Context"
export default function ProductDisplay({product}){
    const {addToCart} = useContext(ShopContext)
    return(
        <div key={product.id}>
            <div className='product'>
                <img  src={product.src} alt="" />
                <span>$ {product.price}</span>
                <span>{product.description}</span>
            </div>
            <button onClick={()=>{addToCart(product.id)}} >Add to Cart</button>
        </div>   
    )
}