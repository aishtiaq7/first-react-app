import React from 'react'
// import NavbarCSS from './Navbar.css'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'


export default function Navbar(){
    return (<>
        <div className="navBar">
            <div className="navLink">
                <h1><FaBars/></h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </>)
}