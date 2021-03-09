import React from 'react'
import Header from '../Header/Header'
import './Listen.css'

function Listen() {
    return (
        <div className="listen">
            <Header />
            <iframe title="spotify embed" className="spotify" src="https://open.spotify.com/embed/artist/21FxRVEbUGwNolaTly31PQ" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="soundcloud embed chinatown" className="soundcloud" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262666865&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe title="soundcloud embed the space between" className="soundcloud" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/785461498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe title="soundcloud embed holding out" className="soundcloud" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/716871283&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe title="soundcloud embed cant undo my love" className="soundcloud" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/447875499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    )
}

export default Listen
