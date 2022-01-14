import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './effects.css'
import { Message } from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    //desestructurando formState
    const { name, email } = formState;

    //efecto que reacciona a cuando se carga el componente por 1era vez
    useEffect( () => {
        //console.log('hey!')
    } , []);

    //efecto que reacciona a cuando hay cambio en el formState
    useEffect( () => {
        //console.log('formState cambio!')
    } , [formState]);

    //efecto que reacciona a cuando se cambia el email
    useEffect( () => {
        //console.log('email cambio!')
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

            { (name === '123') && <Message /> }
        </>
    )
}

SimpleForm.propTypes = {

}

export default SimpleForm
