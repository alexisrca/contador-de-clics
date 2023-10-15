import React from 'react';

function Boton({ texto, esBotonDeClic }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}>
    </button>
  )
}

export default Boton;