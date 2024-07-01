import { Link } from "react-router-dom"

export default function CartItems({cartItems,AllProducts}){

    return(
       <>
         {cartItems.map(product =>{
            const item = AllProducts.find(item => item.id === Number(product.id))
            return(
               <div key={product.id}>
                  <Link to={`/shop/product/${product.id}`}>
                     <div  className='product'>
                     <img src={item.src} alt="" />
                     <span>{product.quantity}</span>
                     <span>${(item.price).toLocaleString('en-US')}</span>
                     <span>${(item.price * product.quantity).toLocaleString('en-US')}</span>
                     </div>
                  </Link>
               </div>
            )
         })}
       
       </>
    )
}
