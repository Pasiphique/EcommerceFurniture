import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className="navbar">
            <div><Link>Logo</Link></div>
            <div>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                </ul>
            </div>
            <div>
                <ul>
                    <input type="text" placeholder="sofa" />
                    <Link to='/cart'>Cart</Link>
                </ul>
            </div>
            
        </nav>
    )
}