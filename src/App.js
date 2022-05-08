import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">



  <div className='routerBox'>

    <h1>CV &#8226; Claudia Hinze &#8226;</h1>

      <nav
        style={{
          borderBottom: "dashed 1px",
          paddingBottom: "1rem",
          textAlign: 'center'
        }}
      >
        <Link className='button' to="./site1">Seite 1</Link> |{" "}
        <Link className='button' to="./site2">Seite 2</Link> 
      </nav>

      <div className='logoBox'>
        <img src="./logo.png" className="App-logo" alt="logo" />
      </div>     

  </div>


      
    </div>
  );
}

export default App;