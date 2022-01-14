import { useState } from "react"

export const useForm = (initialState) => {

    const [values, setValues] = useState(initialState)

    const handleInputChangee = ({target}) =>{
        setValues({
            ...values,//mantengo el state
            [target.name]: target.value // solo cambio esta propiedad y mantengo la anterior
        });
    }

    return [ values, handleInputChangee];
   
}
