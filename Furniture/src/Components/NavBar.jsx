import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/Contact'>Contact</Link>
            </ul>
        </nav>
    )
}