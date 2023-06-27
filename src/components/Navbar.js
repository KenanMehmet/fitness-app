import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';
const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <Link to="/">
                <img src={Logo} />
            </Link>
            <div className='navbar'>
                <Link to="/" style={{ borderBottom: '3px solid #ff2625' }}>Home</Link>
                <a href="#exercises">Exercises</a>
            </div>
        </div>
    )
}

export default Navbar