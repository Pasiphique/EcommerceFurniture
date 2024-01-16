import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer>
            <div className='footer'>
               <h1>Funiro</h1> 
               <div className='link-container'>
                    <ul className='links store'>
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </ul>
               </div>
               <div className='link-container'>
                    <ul className='links help'>
                        <Link>Payment Options</Link>
                        <Link>Returns</Link>
                        <Link>Privacy Policies</Link>
                    </ul>
               </div>
               <div className='link-container'>
                    <form action="">
                        <label htmlFor="">Enter Your Email Address</label>
                        <input type="button" value={"SUBSCRIBE"} />
                    </form>
               </div>
            </div>
        </footer>
    )
}