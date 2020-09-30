import React from 'react'
import './Banner.css'

function Banner(){
    return (
<header className="banner"
style={{
    
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundImage:`url(
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    )`,
    backgroundPosition:"center center"
}}
>
    <div className="banner_contents">
<h1 className="banner_title">Interstellar</h1>
<div className="banner_buttons">
<button className="banner_button">Play</button>
<button className="banner_button">My List</button>
    </div>
    </div>
    <div className="banner_fade"/>
</header>
    )
    
}

export default Banner

