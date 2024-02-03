
import { useContext, useEffect, useState } from 'react'
import Item from './Item'
import { ShopContext } from '../Context/Context'

export default function Shop(){
   const {AllProducts} = useContext(ShopContext)
    return(
        <div>
            <h1>Hero Page</h1>
            <h2>Filter Section</h2>
            <h1>Our Products</h1>
         
            <div className="our-products">
                {AllProducts.map(product =>{
                    return (<Item product={ product}/>)
                })}
                <div>
                    <button >Show More</button>
                </div>
            </div>
        </div>
    )
}