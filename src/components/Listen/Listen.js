import React from 'react'
import Header from '../Header/Header'
import './Listen.css'

function Listen() {
    return (
        <div class="listen">
            <Header />
            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:21FxRVEbUGwNolaTly31PQ&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0"  allowtransparency="true"></iframe>
            <iframe src="https://open.spotify.com/embed/artist/21FxRVEbUGwNolaTly31PQ" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Listen

// spotify:artist:21FxRVEbUGwNolaTly31PQ