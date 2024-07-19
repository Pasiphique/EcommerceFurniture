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
                <div>
                    <h2>Product</h2>
                    <div className='product-image-container'>
                        <img src={product.src} alt="" />
                    </div>
                </div>
                
                <div className="product-info">
                   
                    <span>$ {product.price}</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam in dolore esse nulla iusto beatae blanditiis quas sapiente eaque.</span>
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