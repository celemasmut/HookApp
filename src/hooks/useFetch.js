import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [state, setstate] = useState({data: null, loading: true, error: null});


    //se ejecuta cuando el url cambia 
    useEffect(() => {

        setstate({ data: null, loading: true, error: null});

        //peticion que regresa una promesa
        fetch(url)
            .then( resp => resp.json() ) // de la promesa se estrae la respuesta lo cual regresa otra promesa
            .then( data => {// se obtiene la data de la promesa y se setea los cambios
                setstate({
                    loading: false,
                    error: null,
                    data // data es igual a la data que se recibe
                })

            })
        
    }, [url])

    return state;
   
}
