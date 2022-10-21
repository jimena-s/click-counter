import './App.css';
import jimenaLogo from './imagenes/jim-logo.png';
import Button from './components/Button';
import Contador from './components/Contador';
import { useState } from 'react';

  /* const declarada como ARRAY.
  numClics > es un valor que se va a actualizar, y lo vamos a usar como el ESTADO
  setNumClics > función que va a permitir actualizar el estado. Hay una convención para nombrarla como 'set', podría ser por ejp [color, setColor]
  useState(0) > significa que el valor inicial va a ser 0
  */

  /* COMENTARIOS FINALES:
  1) Utilizar ; al final de las FUNCIONES FLECHA, especialmente cuando se asigna a una variable.
  2) No hace falta importar react en todo, a menos que estés importando HOOKS. Cambios a partir de la versión 17.  
  */

function App() {

  const [numClics, setNumClics] = useState(0);

  const funcionClic = () => {
    setNumClics(numClics + 1);
  };

  const funcionReiniciar = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='jimena-logo-contenedor'>
        <img 
          className='jimena-logo'
          src={jimenaLogo}
          alt='Logo de FCC' />
      </div>
      <div className='contenedor-contador'>
        <Contador 
          numClics={numClics}
        />
        <Button 
          texto='CLIC'
          esBotonDeClic={true}
          manejarClic={funcionClic}
        />
        <Button 
          texto='REINICIAR'
          esBotonDeClic={false}
          manejarClic={funcionReiniciar}
          />
      </div>  

    </div>
  );
}

export default App;

/* cuando se están probando cosas, para que se desencadenen los eventos se puede incluir un console.log - básicamente porque al no estar hecha la función, da error la app.
*/

/*HOOKS = FUNCIONES ESPECIALES. UNO ES useState PERMITE AGREGAR UN ESTADO A UN COMPONENTE FUNCIONAL */
