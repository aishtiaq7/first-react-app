import React from 'react'
// import NavbarCSS from './Navbar.css'
import { FaBars } from 'react-icons/fa';


export default function Navbar(){
    return (<>
        <div className="navBar">
            <div className="navLink">
                <h1><FaBars/>Navbar Component</h1>
            </div>
        </div>
    </>)
}