 
import ProductItems from '../Products/productItems.json'
import {Link} from 'react-router-dom'
export default function Browse(){

    const listitems = ProductItems.map(product =>{
        return (<div key={product.id} className='product'>
            <img src={product.src} alt="" />
            <span>$ {product.price}</span>
        </div>)
    })
    return(
       <div>
         <div>
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore.</p>
        </div>
        <div className="range-container">
            <div className="range">
                <img src="img\dining.png" alt="" />
                <span>Dining</span>
            </div>
            <div className="range">
                <img src="img\living-room.png" alt="" />
                <span>Living</span>
            </div>
            <div className="range">
                <img src="img\bedroom.png" alt="" />
                <span>Bedroom</span>
            </div>
        </div>
        <div>
            <h1>Our Products</h1>
            <div className="our-products">
               {listitems.slice(0,8)}
            <div>
                <button><Link to='/shop'>Show More</Link></button>
            </div>
        </div>
        <div>
            <div>
                <p>50+ Beautiful rooms inspiration</p>
                <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button>Explore More</button>
            </div>
            <div>
                <img src="/img/inspiration/inspir1.png" alt="" className="inspiration"/>
                <img src="/img/inspiration/inspir2.png" alt="" className="inspiration" />
            </div>

        </div>
        {/*furniro section do with css-grid and the grid template areas */}
        <div>
            <h1>#Furniture</h1>
            <div className="collage">
                <div className="a">
                    <img src="/img/a.png" alt="" />
                </div>
                <div className="b" >
                    <img src="/img/b.png" alt="" />
                </div>
                <div className="c">
                    <img src="/img/c.png" alt="" />
                </div>
                <div className="d">
                    <img src="/img/d.png" alt="" />
                </div>
                <div className="e">
                <img src="/img/e.png" alt="" />
                </div>
                <div className="f">
                    <img src="/img/f.png" alt="" />
                </div>
                <div className="g">
                    <img src="/img/g.png" alt="" />
                </div>
                <div className="h">
                <img src="/img/h.png" alt="" />
                </div>
                <div className="I">
                    <img src="/img/i.png" alt="" />
                </div>
        </div>
        </div>
        
        </div>
       </div>
    )
}