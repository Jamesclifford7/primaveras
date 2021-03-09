import React from 'react'
import './Header.css'
import blackLogo from '../../images/Primaveras_black.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to="/"><img src={blackLogo} alt="primaveras logo/home button" /></Link>
        </header>
    )
}

export default Header;