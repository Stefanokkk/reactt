import { useState } from 'react'
import './lista.css'

const Lista = () => {
    const [frutas, setFrutas] = useState([
        'Maçã', 'Banana', 'Laranja', 'Limão'
    ])

    return <ul>
        {frutas.map(fruta => <li>{fruta}</li>)}
    </ul>
}

export default Lista