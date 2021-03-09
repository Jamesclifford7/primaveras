import React from 'react'
import Header from '../Header/Header'
import './Listen.css'

function Listen() {
    return (
        <div class="listen">
            <Header />
            {/* <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:21FxRVEbUGwNolaTly31PQ&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0"  allowtransparency="true"></iframe> */}
            <iframe className="spotify" src="https://open.spotify.com/embed/artist/21FxRVEbUGwNolaTly31PQ" width="800" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe width="800" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262666865&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="800" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/785461498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="800" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/716871283&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="800" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/447875499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    )
}

export default Listen

// spotify:artist:21FxRVEbUGwNolaTly31PQ