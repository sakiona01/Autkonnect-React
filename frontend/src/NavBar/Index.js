import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './NavBar.css'
//import img from '../Images (LOGO)'

function NavBar () {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
        setDropdown(true);

    }

    const onMouseLeave = () => {
        setDropdown(false);
    }


    return (
<>
    <nav className ='navbar'>
        <Link to="/" className= 'navbar-logo'>
            <img className="logo" src={img} alt="AutKonnect" />
        </Link>
    <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/Services" className='nav-links' onClick={closeMobileMenu}>
                Services
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/Shop" className='nav-links' onClick={closeMobileMenu}>
                Shop
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/Login" className='nav-links' onClick={closeMobileMenu}>
                Login
            </Link>
        </li>


    </ul>
    <Button />
        </nav>   
        </>
    );
};

export default NavBar;