import React from 'react'
import Bar from './countdown'

import Gif from '../resources/graf_white.gif'

const Detail = () => {
    return(
        <div className="detail">

            <h2>Detail</h2>
            <Bar />

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