import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Nav = () => {
    return (
        <>
        <div className='header'>
            <div className='logo'>
                <img src="/img/NClogo.png" alt="NC Logo" className="nav-logo" />
            </div>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to="/home" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/product" className='link'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='link'>Cart</Link>
                    </li>
                    <li>
                        <Link to="/about" className='link'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav
