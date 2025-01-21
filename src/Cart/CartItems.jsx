import { Link } from "react-router-dom"

export default function CartItems({cartItems,AllProducts}){

    return(
       <div className="cart-items">
         {cartItems.map(product =>{
            const item = AllProducts.find(item => item.id === Number(product.id))
            return(
                  <Link to={`/shop/product/${product.id}`}>
                     <div  className='product'>
                        <div className='cart-image'>
                              <img src={item.src} alt="" />
                        </div>
                        <span>{product.quantity}</span>
                        <span>${(item.price * product.quantity).toLocaleString('en-US')}</span>
                        <span>Remove</span>
                     </div>
                  </Link>
            )
         })}
       
       </div>
    )
}
//product image product title price quantity subtotal garbagecan
