import React from 'react'
import Header from '../Header/Header'
import './Connect.css'

function Connect() {
    return (
        <div className="connect">
            <Header/>
            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:21FxRVEbUGwNolaTly31PQ&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0"  allowtransparency="true"></iframe>
        </div>
    )
}

export default Connect