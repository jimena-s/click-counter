import React from 'react';
import '../stylesheets/button.css';

/* 
  otra forma de usar PROPS > SINTAXIS DE DESESTRUCTURACIÓN. Normalmente se trabaja como este ejemplo. 

  OPERADOR TERNARIO: para utilizar clases que son VARIABLES (dinámica). Permite tomar decisiones a partir de otro valor. Buscar en canal youtube FCC.

  esBotondeClic = es BOOLEANO (true-false). Si es falso, se le va a asignar al botón la clase de REINICIAR
 */

function Button({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button 
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  )    
}

/* 
  ternario: Es botón de clic? Si es true > asignar la clase "boton-clic"
  : de lo contrario (false), asignar la clase "boton-reiniciar" 
*/ 

/* 
  manejarClic = una FUNCIÓN que se pasa como PROP, y luego se llama en el event listener de onClick. Es decir, cuando se haga clic en el botón se va a ejecutar la función manejarClic
*/

export default Button;