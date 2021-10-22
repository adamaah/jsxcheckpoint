import logo from './logo.svg';
import './App.css';
import './style.css';
import imageDepuisSrc from "./imageSrc.jpg";
import ReactPlayer from 'react-player';

function App() {
  return (

    
    //le code de base de react
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    

    //Mon code 


    <div>


      <div className="firstDiv">
        <h1 className="title redd"> 
          Mon nom est <span>Adama NIANG</span>
        </h1>

        {/* la balise div qui va remplacer la balise br */}
        <div className="separateur"></div>

        <img src={imageDepuisSrc} className="mesImages" alt ='imageSrc' />

        {/* la balise div qui va remplacer la balise br */}
        <div className="separateur"></div>

        <img src="/imagePublic.jpg" className="mesImages" alt="imagePublic" />


      </div>
      
      <ReactPlayer className="maVideo" controls url='https://www.youtube.com/watch?v=olJOZp57FWM'></ReactPlayer>
          
    </div>


  );
}

export default App;
