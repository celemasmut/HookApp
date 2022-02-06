import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {

        inputRef.current.select();  //remarca y selecciona el input cuando se aprieta el boton
    }

  return <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input 
         ref = {inputRef}
         className="form-control"
         placeholder="su nombre"
      />

      <button 
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}>
          Focus
      </button>

  </div>;
};
