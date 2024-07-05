import { useParams } from "react-router-dom"
import AllProducts from '../Products/productItems.json'
import {useShoppingCart} from '../Context/CartContext'
export default function ProductDisplay(){
    const {productId} = useParams()
    const {getItemQuantity,increaseCartQuantity, decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(productId)
    const product = AllProducts.find((product => product.id == productId))
    return(
        <div key={product.id} className="ind-product">
            <div className='product'>
                <div className='product-image-container'>
                    <img src={product.src} alt="" />
                </div>
                <div className="product-info">
                    <span>$ {product.price}</span>
                    <span>{product.description}</span>
                    {quantity == 0 ? 
                <button onClick={()=>increaseCartQuantity(productId)}>Add to Cart</button>:
                (
                    <>
                        <div> 
                            <button onClick={()=>decreaseCartQuantity(productId)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={()=>increaseCartQuantity(productId)}>+</button>
                        </div>
                        <button onClick={()=> removeFromCart(id)}>remove </button>
                    </>
                )
        } 
                </div>
                
            </div>
                   
        </div>      
    )
}