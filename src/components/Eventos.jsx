import React, { useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('texto desde estado')

    const eventoClick = () => {
        console.log('Me distes un click')
        setTexto('Cambiando el texto...')
    }

    return (
        <div>
            <hr />
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}>Click</button>
        </div>
    )
}

export default Eventos
