import React from 'react'
import Bar from './countdown'
import Gif from '../resources/graf_white.gif'
import { Link } from 'react-router-dom'


const Detail = () => {
    return(
        <div className="detail">

            <Link
                to="/detail">
                <h2>Detalj</h2>
            </Link>

            <img 
                src={Gif}
                alt="animert graf"
                width="700" 
                height="400" 
                >
                
                   
            </img>

        </div>
    )
}

export default Detail;