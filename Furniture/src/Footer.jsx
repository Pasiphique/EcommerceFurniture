import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer>
            <h1>Funiro.</h1> 
            <div className='footer'>
               
               <div className='link-container'> 
                    <span>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                    </span>               
                    <span>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/contact'>Payment Options</Link>
                    </span>
                    
                    <span>
                        <Link to='/contact'>Returns</Link>
                        <Link to='/contact'>Privacy Policies</Link>  
                    </span>
                    <Link to='/contact'>Terms of Use</Link>  
                                     
               </div>
               <p>	&copy; 2024 Pasiphique Osward</p>
            </div>
        
        </footer>
        
    )
}