import React from 'react'
import PropTypes from 'prop-types'

const CounterWithCustomHook = props => {
    return (
        <>
        <h1>Counter with hook: { 0 } </h1>
        <hr />

        <button className="btn"> +1 </button>    
        <button className="btn"> -1 </button>    
        </>
    )
}

CounterWithCustomHook.propTypes = {

}

export default CounterWithCustomHook
