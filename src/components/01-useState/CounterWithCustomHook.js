import React from 'react'
import PropTypes from 'prop-types'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'


const CounterWithCustomHook = () => {



    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
        <h1>Counter with hook: { state } </h1>
        <hr />

        <button onClick={ () => increment(2)} className="btn"> +1 </button>    
        <button onClick={ ()=> decrement(2)} className="btn"> -1 </button>    
        <button onClick={ reset} className="btn"> reset </button>    

        </>
    )
}

CounterWithCustomHook.propTypes = {

}

export default CounterWithCustomHook
