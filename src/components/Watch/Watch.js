import React from 'react'; 
import Header from '../Header/Header'
import './Watch.css'

function Watch() {
    return (
        <div className="watch">
            <Header />
            <iframe title="Can't Undo My Love" src="https://www.youtube.com/embed/xZEn-FJk3gM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe title="Call Me Back" src="https://www.youtube.com/embed/0SP4KHlPZ9E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )   
}

export default Watch