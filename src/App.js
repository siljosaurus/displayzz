import './App.css';
import Film from './components/film'
import Detail from './components/detail'
import Overview from './components/overview';



const App = () => {


  return(
    <div className="app">
     
      <h1>Avfallskonferansen</h1>

      <Film />
      <Detail />
      <Overview />      

     
    </div>
  )

}

export default App;
