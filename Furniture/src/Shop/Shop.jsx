import { useEffect } from 'react'
import AllProducts from '../Products/productItems.json'
import { Link } from 'react-router-dom'
export default function Shop(){
    return(
        <div>
            <h1>Hero Page</h1>
            <h2>Filter Section</h2>
            <h1>Our Products</h1>
         
            <div className="our-products">
                {AllProducts.map(product =>{
                    return (
                        <div key={product.id}>
                            <Link to={`/shop/product/${product.id}`}>
                                <div  className='product'>
                                <img src={product.src} alt="" />
                                <span>$ {(product.price).toLocaleString('en-US')}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}