import React from 'react'
import { useEffect } from 'react/cjs/react.development'

export const Message = () => {

    useEffect(() => {
        
        console.log('componente montado');

        return () => {
            console.log('componente desmontado'); // fase de limpieza

        }
    }, [])


    return (
        <>
        <h3>Tu la molas!</h3>
            
        </>
    )
}

