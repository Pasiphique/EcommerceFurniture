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
                <div className="product-tag">
                    <div className='product-image-container'>
                        <img src={product.src} alt="" />
                    </div>
                </div>
                
                <div className="product-info">
                    <h2>Product</h2>
                    <span>$ {product.price}</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam in dolore esse nulla iusto beatae blanditiis quas sapiente eaque.</span>
                    <div className="product-pick">
                        <div>
                            <span>Size</span>
                            <div className="boxes">
                                <button >S</button>
                                <button >L</button>
                                <button >XL</button>
                            </div>
                        </div>
                        <div>
                            <span>Color</span>
                            <div className="circles">
                                <button style={{backgroundColor: 'rgb(0, 1, 90)'}}></button>             
                                <button style={{backgroundColor: 'white'}}></button>
                                <button style={{backgroundColor: 'burlywood'}}></button>
                                <button style={{backgroundColor: 'grey'}}></button>
                                <button style={{backgroundColor: 'black'}}></button>
                                <button style={{backgroundColor: 'brown'}}></button>
                            </div>
                        </div>
                        
                    </div>

                <div className="cart-buttons">
                    <div> 
                        <button onClick={()=>decreaseCartQuantity(productId)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={()=>increaseCartQuantity(productId)}>+</button>
                    </div>
                    <button onClick={()=>increaseCartQuantity(productId)}>Add to Cart</button>
                </div>   
                    
                </div>
                
            </div>
                   
        </div>      
    )
}