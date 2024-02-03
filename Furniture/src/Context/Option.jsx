
import { useParams } from "react-router-dom"
import Shop from "../Components/Shop"
import { ShopContext } from "./Context"
import { useContext } from "react"
import ProductDisplay from "./ProductDisplay"
export default function Options(){
    const {AllProducts} = useContext(ShopContext)
    const {productId} = useParams()
    const products = AllProducts.filter((id) => id.id  == productId)
    return(
        <div>
              <ProductDisplay product={products[0]} />
        </div>
    )
}
