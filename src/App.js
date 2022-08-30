import './App.css';
import Timelapse from './components/timelapse'
import Detail from './components/detail'
import Kart from './components/kart';



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
      <Detail />
      <Kart />

      <br/>
      <br/>
      <br/>
    </div>
  )

}

export default App;
