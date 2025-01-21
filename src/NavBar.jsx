import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const toggleMenu = ()=>{
        setIsOpen((open) => !open)
    }
    
    return(
        <nav className="navbar">
            <div className={`links-container ${isOpen ? "is-open": ""}`}>
                <Link  to='./'>Funiro.</Link>
                <ul className={`links ${isOpen ? "is-open": ""}`}>
                    <Link to='./shop'>Shop</Link>
                    <Link to='./cart'>Cart</Link>      
                </ul>
            </div>
            
            <div className={`hamburger ${isOpen ? "is-open": ""}`} onClick={toggleMenu} ref={ref}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
        </nav>
        
    )
}