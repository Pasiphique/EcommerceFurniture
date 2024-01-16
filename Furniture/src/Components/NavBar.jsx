import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className="navbar">
            <div><Link>Logo</Link></div>
            <div>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Contact'>Contact</Link>
                    
                </ul>
            </div>
            <div>
                <ul>
                    <Link>Settings</Link>
                    <button>Search</button>
                    <Link>Favorites</Link>
                    <Link>Cart</Link>
                </ul>
            </div>
            
        </nav>
    )
}