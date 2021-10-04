import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        console.log('click')
        setContador(contador + 1)
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>nuestro número aumentado: {contador}</h3>
            <h4>
                {
                    contador > 2 ? 'Es mayor a dos' : 'Es menor de dos'
                }
            </h4>
            <button onClick={() => aumentar()}>Aumentado</button>
        </div>
    )
}

export default Contador
