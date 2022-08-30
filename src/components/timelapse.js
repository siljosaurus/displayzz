import React from 'react'
import { Link } from 'react-router-dom';


const Timelapse = () => {

    return(
        <div className="film">

            <Link
                to="/timelapse">
                <h2>Timelapse</h2>
            </Link>
           

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

export default Timelapse;