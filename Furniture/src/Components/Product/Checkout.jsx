import CartItems from '../CartItems'
export default function Checkout(){
    return(
        <div>
            <div>
                <h2>Shipping</h2>
                <form action="">
                    <select name="" id="">
                        <option value="">free-shipping - $5</option>
                        <option value="">expedited Shipping - $10</option>
                        <option value="">Express shipping - $15</option>
                    </select>
                </form>
            </div>
            <div>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="">
                                First Name
                                <input type="text" />
                            </label>
                            <label htmlFor="">
                                Last Name
                                <input type="text" />
                            </label>
                        </div>
                        <label htmlFor="">
                            Phone
                            <input type="text" placeholder="optional" />
                        </label>
                        <label htmlFor="">
                            Email address
                            <input type="text" />
                        </label>
                    </div>   
                </form>
                <div>
                    <h2>Billing and shipping information</h2>
                    <form action="">
                    <label htmlFor="">
                            My Billing and Shipping are the same
                            <input type="checkbox" />
                        </label>
                        <label htmlFor="">
                            Street Address
                            <input type="text" />
                        </label>
                            <input type="text" placeholder=" Apt,Suite,etc.(optional)" />
                            <input type="text" placeholder="ZIP CODE (EX 12345)" />
                    </form>
                </div>
                <div>
                    <h2>Shipping Adress</h2>
                    <form action="">
                        <label htmlFor="">
                            Recipient's First name
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Recipients Last Name
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Street Address
                            <input type="text" />
                        </label>
                            <input type="text" placeholder=" Apt,Suite,etc.(optional)" />
                            <input type="text" placeholder="ZIP CODE (EX 12345)" />
                    </form>
                </div>
                <div>
                    <h2>Payment</h2>
                    <form action="">
                        <input type="radio" name="card" id="credit" placeholder="Credit/Debit Card" />
                        <label htmlFor="credit">
                            <input type="text" placeholder="Credit/Debit Card Number" />
                            <input type="text" placeholder="Exp. MM/YY" />
                            <input type="text" placeholder="CVV" />
                        </label>
                        <input type="radio" name="card" id="paypal" />
                        <label htmlFor="paypal">
                            <p>Pay in x interest-free payments of y with affirm</p>
                            <p>Pay in x interest-free payments of y with afterpay</p>
                            <p>watch 90 videos to get this product for free</p>
                        </label>
                    </form>
                </div>
                <div>
                    <a href="">Add Gift Card</a>
                    <a href="">Apply Promo Code</a>
                </div>
            </div>
            <div>
                <span>Products</span>
                <span>Subtotal</span>
                <span>total</span>
                <span>By placing the order, i agree to the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></span>
                <span>Order # 339449</span>
            </div>
            <CartItems />
        </div>
        
    )
}