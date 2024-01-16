 
export default function Browse(){
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
                <div className="product">
                    <img src="/img/products/img3.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img1.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img2.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img3.1.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img4.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img5.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img6.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
                <div className="product">
                    <img src="/img/products/img7.png" alt="" />
                    <span>Title</span>
                    <p>Lorem, ipsum.</p>
                    <span>Price</span>
                    <span>discount</span>
                </div>
            <div>
                <button>Show More</button>
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