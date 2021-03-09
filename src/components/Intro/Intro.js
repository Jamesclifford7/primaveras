import React from 'react'; 
import './Intro.css'

function Intro(props) {
    return (
        <div className="intro">
            <h1>You have reached the website for Primaveras. Press the button to enter</h1>
            {/* <iframe src="https://giphy.com/embed/l44Qqq69E0gTyqLwk" width="500" height="500" frameBorder="0" title="swirl" allowFullScreen></iframe> */}
            <button onClick={event => props.handleIntro(event)}>!!!</button>
        </div>
    )
}

export default Intro