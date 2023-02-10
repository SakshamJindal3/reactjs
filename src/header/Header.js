import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
    <div>
        <h1>
            <Link to="/" className='logo'>
            Inzint Ready Go!
            </Link>
            </h1>

    </div>
    <div className='header-links'>
        <ul>
            <li>
                <Link to="/home" >Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/cart" >Cart</Link>
                <i className="shopping-cart" />
            </li>
        </ul>
    </div>
    </header>
  )
}

export default Header