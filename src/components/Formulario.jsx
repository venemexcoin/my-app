import React, { useState } from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState('')
    const [description, setDescription] = useState('')

    const [lista, setLista] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault()


        if (!fruta.trim()) {
            console.log('Esta vacio fruta')
            return
        }
        if (!description.trim()) {
            console.log('Esta vacio descripción')
            return
        }

        console.log(`procesando datos... ${fruta} ${description}`)

        setLista([
            ...lista,
            { fruta, description }
        ])

        e.target.reset()
        setFruta('')
        setDescription('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={e => setFruta(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

            <div className="card mt-5">
                <div className="card-header">
                    <h4 className="card-title text-center">List y Descriptión</h4>
                </div>
                <div className="card-body">
                    <ul>
                        {
                            lista.map((item, index) => (
                                <li key={index}>
                                    {item.fruta} {item.description}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Formulario
