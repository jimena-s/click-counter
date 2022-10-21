import React from 'react';
import '../stylesheets/contador.css';
/*
  Este componente necesita un ESTADO específico. Ese estado es el num de clics y se va a actualizar cuando hagamos clic en el botón y si hacemos clic en reiniciar el contador vuelve a cero. ESTADO = HOOK. Ese estado está en APP.JS PERO TAMBIÉN PUEDE SER OTRO COMPONENTE.
*/
function Contador({ numClics }) {
    return (
      <div className='contador'>
        {numClics}
      </div>
    );
}

export default Contador;