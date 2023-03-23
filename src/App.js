import './App.css';
import { useEffect, useState } from 'react';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import { BlueBotton } from './components/BlueButton';
import { RedButton } from './components/RedButton';

function App() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);


  const [color, setColor] = useState("");

  const handleClick = (color) => {
    console.log("Hola soy Blue");
    alert("Señor usuario su pantalla a cambiado a color: " + color);
    // setShow(true)
    setColor(color);
    // <Modal show={show}></Modal>
  }


  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  // }, [color])

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ "color": `${color}` }}>Prueba Basica</h1>

        <div>
          <BlueBotton handleClick={() => handleClick("blue")}></BlueBotton>
          <RedButton handleClick={() => handleClick("red")}></RedButton>
        </div>
      </header>
    </div>
  );
}

export default App;
