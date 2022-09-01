import './App.css';
import Timelapse from './components/timelapse'
import Kart from './components/kart';
import { Link } from 'react-router-dom'
import Gif from './resources/final_final_graph.gif'





const App = () => {


  return(
    <div className="app">
     
     
        <h1>Avfallskonferansen</h1>

        <a href={"https://www.checkin.no/event/40371/arskonferansen-2022-medlem/participants"}>Deltakerliste</a>
        <br />
        <a href={"https://arskonferansen.avfallnorge.no/program/"}>Program</a>
     
      <br/>
      <div style={{border: 'solid rgba(229, 227, 210)'}}></div>
      

      <Timelapse />

      <Link
        to="/detail">
        <h2>Graf</h2>
        <img 
          src={Gif}
          alt="animert graf"
          width="800" 
          height="auto">
      </img>
      </Link>
      
      


      <Kart />

      <br/>
      <br/>
      <br/>
    </div>
  )

}

export default App;
