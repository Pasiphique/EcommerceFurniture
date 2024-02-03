import { Link } from "react-router-dom"

export default function Item({product}){
    return(
        <div key={product.id}>
            <Link to={`/product/${product.id}`}>
                <div  className='product'>
                <img src={product.src} alt="" />
                <span>$ {product.price}</span>
                </div>
            </Link>
        </div>
    )
}