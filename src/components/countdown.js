import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const Countdown = () => {

   const [counter, setCounter] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {

            setCounter((prev) => {
                return prev + 1
            })
            
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])




    /*
    const varighet = now.diff('2022-06-01', 'day')
    const diff = now.diff('2022-05-16', 'day')
    const prosent = (1-Math.abs(diff)/Math.abs(varighet))*100
    */
    

    return(
        <div className="countdown">

            <p>Counter: {counter}</p>

            
        </div>
    )
}

export default Countdown;


/*
<h2> Fyllingsgrad: {Math.abs(diff)} </h2>
            <div style={{
                width: "100%",
                backgroundColor: "rgba(var(--sf-yellow), 0.5)",
                borderRadius: "0.3rem",
                overflow: 'hidden',
            }}>
                <div style={{
                    width: `${prosent}%`,
                    height: 50,
                    backgroundColor: "rgba(var(--sf-yellow), 1)",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                   <div style={{
                       backgroundColor: 'transparent',
                       textAlign: 'center',
                       color: '#231F20'
                   }}> {Math.abs(prosent.toFixed(0))}% ferdig </div>
                </div>
                
                </div>
*/