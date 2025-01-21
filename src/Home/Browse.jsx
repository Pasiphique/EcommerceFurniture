 
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
                
                <Link to='./shop'>
                    <img src="./public/img/dining.png" alt="" />
                </Link>
                <span>Dining</span>
            </div>
            <div className="range">
                <Link to='./shop'>
                    <img src="./public/img/living-room.png" alt="" />
                </Link>
                
                <span>Living</span>
            </div>
            <div className="range">
                <Link to='./shop'>
                    <img src="./img/bedroom.png" alt="" />
                </Link>
                
                <span>Bedroom</span>
            </div>
        </div>
        <div className='inspirations'>
            <div className='insp-text'>
                <p>50+ Beautiful rooms inspiration</p>
                <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button>Explore More</button>
            </div>
            <div className='inspiration-images'>
               
                <div><img src="./img/inspiration/inspir1.png" alt="" /></div>
                <div><img src="./img/inspiration/inspir2.png" alt=""  /></div>
            </div>

        </div>
        {/* furniro section do with css-grid and the grid template areas */}
         <div className='collage-container'>
            <h1>#Furniture</h1>
            <div className="collage">
                <div className=" lk">
                    <img src="./img/a.png" alt="" />
                </div>
                <div className="lk " >
                    <img src="./img/b.png" alt="" />
                </div>
                <div className="lk ">
                    <img src="./img/c.png" alt="" />
                </div>
                <div className="lk">
                    <img src="./img/d.png" alt="" />
                </div>
                <div className=" lk">
                    <img src="./img/e.png" alt="" />
                </div>
                <div className="lk">
                    <img src="./img/f.png" alt="" />
                </div>
                <div className="lk">
                    <img src="./img/g.png" alt="" />
                </div>
                <div className="lk">
                    <img src="./img/h.png" alt="" />
                </div>
                <div className="lk">
                    <img src="./img/i.png" alt="" />
                </div>
            </div> 
        </div> 
        
       </div>
    )
}