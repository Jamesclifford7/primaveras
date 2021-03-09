import React from 'react'
import pattern from '../../images/flower_pattern.png'
import blackLogo from '../../images/Primaveras_black.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function Home() {
    return (
        <div className="home">
            <Header/>
            <h1><Link to="/watch">WATCH</Link></h1>
            <h1><Link>LISTEN</Link></h1>
            <h1><Link>CONNECT</Link></h1>
            <h1><Link>GET IN TOUCH</Link></h1>
        </div>
    )
}

export default Home;