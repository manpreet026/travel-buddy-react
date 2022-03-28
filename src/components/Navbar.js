import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__title navbar__item'>Travel Buddy</div>
            <div className='navbar__item'>Home</div>
            <div className='navbar__item'>About</div>
            <div className='navbar__item'>Plan your trip</div>
            <div className='navbar__item'>Login</div>
            <div className='navbar__item'>Sign-up</div>
        </div>
    )

}
