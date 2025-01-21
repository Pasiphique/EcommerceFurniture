import { useState } from 'react'
import AllProducts from '../Products/productItems.json'
import { Link } from 'react-router-dom'
export default function Shop(){
    const [displayedItems, setDisplayedItems] = useState(AllProducts.slice(0,9))
    const [visibleCount, setVisibleCount] = useState(9)
    const loadMore = ()=>{
        const newVisibleCount = Math.min(visibleCount+9, AllProducts.length)
        setDisplayedItems(AllProducts.slice(0,newVisibleCount))
        setVisibleCount(newVisibleCount)
    }
    return(
        <div className='product-display'>       
            <h1>Our Products</h1>
         
            <div className="displayed-products">
                {displayedItems.map(product =>{
                    return (
                        <div key={product.id} className='shop-product'>
                            <Link to={`./shop/product/${product.id}`}>                             
                                <div className='image-container'>
                                    <img src={product.src} alt="" />
                                </div>
                                <div>
                                    <span>$ {(product.price).toLocaleString('en-US')}</span>  
                                </div>
                                                            
                            </Link>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>loadMore()}>Load More</button>
        </div>
    )
}