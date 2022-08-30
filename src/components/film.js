import React from 'react'


const Film = () => {

    return(
        <div className="film">
            <h2>Timelapse</h2>

            <iframe 
                width="700" 
                height="400" 
                src="https://www.youtube.com/embed/GRonxog5mbw?autoplay=1&loop=1&playlist=BPBQJdljZaY" 
                title="YouTube video player" 
                frameBorder="0"
                allowFullScreen>
            </iframe>
            
        </div>
    )
}

export default Film;