import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer>
            <div className='footer'>
               <h1>Funiro</h1> 
               <div className='link-container'>
                    <ul className='links store'>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
               </div>
               <div className='link-container'>
                    <ul className='links help'>
                        <Link to='#'>Payment Options</Link>
                        <Link to='#'>Returns</Link>
                        <Link to='#'>Privacy Policies</Link>
                        <Link to='#'>Terms of Use</Link>
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