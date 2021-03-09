import React from 'react'
import Header from '../Header/Header'
import './Connect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function Connect() {
    return (
        <div className="connect">
            <Header/>
            <div>
                <h2>For Your Ears</h2>
                <iframe title="spotify follow embed" src="https://open.spotify.com/follow/1/?uri=spotify:artist:21FxRVEbUGwNolaTly31PQ&size=detail&theme=light" width="300" height="56" scrolling="no" frameBorder="0"  allowtransparency="true"></iframe>
            </div>
            <div>
                <h2>For Your Eyes</h2>
                <a href="https://www.instagram.com/primaverasmusic/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="5x" /></a>
            </div>
            <div>
                <h2>For Updates</h2>
                <a href="https://www.facebook.com/Primaverasmusic/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="5x" /></a>
            </div>
            <div>
                <a href="https://twitter.com/Primaverasmusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="5x" /></a>
            </div>
        </div>
    )
}

export default Connect