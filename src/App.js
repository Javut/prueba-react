import logo from './logo.svg';
import './App.css';
import { BlueComponent } from './components/BlueComponent';
import { RedComponent } from './components/RedComponent';
import { useEffect, useState } from 'react';

function App() {

  const [color, setColor] = useState("");

  const handleClick = (color) => {
    console.log("Hola soy Blue");
    alert("Señor usuario su pantalla a cambiado a color: "+ color);
    setColor(color);
  }

  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  // }, [color])
  


  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{"color": `${color}`}}>Prueba Basica</h1>

        <div>
           <button className='blue' onClick={ () => handleClick("blue")}>Azul</button>
           <button className='red' onClick={ () => handleClick("red")}>Rojo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
