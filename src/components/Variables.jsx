import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constantes'
    const imagen = 'https://i.postimg.cc/rFhg7HpS/img1yo.jpg'

    return (
        <div>
            <h2>Nuevo Componecte {saludo}</h2>
            <img src={imagen} alt="Foto de perfil" />
        </div>
    )
}

export default Variables
