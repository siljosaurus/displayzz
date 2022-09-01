import React from 'react'
import Mapa from '../resources/mapa.jpg'
import { Link } from 'react-router-dom'


const Kart = () => {
    return(
        <div className="kart">


            <Link
                to="/kart">
                <h2>Kart</h2>
            </Link>

           
            <img 
                src={Mapa}
                alt="animert graf"
                width="1200" 
                height="1200"
                >
                
            </img>

        </div>
    )
}

export default Kart;