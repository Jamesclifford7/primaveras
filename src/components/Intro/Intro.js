import React from 'react'; 
import listenLoud from '../../images/LLWF.jpg'
import pattern from '../../images/flower_pattern.png'
import './Intro.css'

function Intro(props) {
    return (
        <div className="intro">
            <h1>You have reached the website for Primaveras. Press the button to enter</h1>
            {/* <img src={pattern} /> */}
            <iframe src="https://giphy.com/embed/l44Qqq69E0gTyqLwk" width="500" height="500" frameBorder="0" allowFullScreen></iframe>
            {/* <iframe src="https://giphy.com/embed/SrxYX5MLC2uaI" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
            <button>!!!</button>
        </div>
    )
}

export default Intro