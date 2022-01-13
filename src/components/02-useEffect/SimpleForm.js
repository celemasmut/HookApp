import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './effects.css'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    //desestructurando formState
    const { name, email } = formState;

    useEffect( () => {
        console.log('hey!')
    } , []);

    useEffect( () => {
        console.log('formState cambio!')
    } , [formState]);

    useEffect( () => {
        console.log('email cambio!')
    } , [email]);

    const handleInputChange  = ({ target }) =>{
        setFormState({
            ...formState,//mantengo el state
            [target.name]: target.value // solo cambio esta propiedad y mantengo la anterior
        });
    }


    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInputChange }
                    />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInputChange }
                    />
            </div>
        </>
    )
}

SimpleForm.propTypes = {

}

export default SimpleForm
