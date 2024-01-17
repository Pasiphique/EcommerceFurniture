
export default function Product(){
    return(
        <div>
            <div>
                <img src="/img/img4.png" alt="" />
                <div>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Star rating | 5 customer reviews</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias recusandae totam saepe reprehenderit ratione veniam optio possimus deleniti? Dolor, ducimus. Id quos sapiente dicta? Hic velit magni consequuntur alias!</span>
                    <div>
                        <span>size</span>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXl</button>
                    </div>
                     <form action="">
                        <input type="number" name="" id="" minLength={1} maxLength={5}/>
                        <input type="submit" value="" placeholder="Add to Cart"/>
                     </form>
                </div>
            </div>
            <div>
                <span>SKU: 0001</span>
                <span>Category: Sofas</span>
                <span>Tags: Sofa,Chair,Home,SHop</span>
            </div>
            <div>
                <h2>Related Products</h2>
            </div>
        </div>
    )
}