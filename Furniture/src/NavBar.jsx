import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className="navbar">
            <div><Link  to='/'>Logo</Link></div>
            <div>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                </ul>
            </div>
            <div>  
                    <Link to='/cart'>Cart</Link>
            </div>
            
        </nav>
    )
}