import { useState } from "react"

const Formulario = () => {
    const [nome, setNome] = useState("")

    const handleChange = ({target: {value}}) => setNome(value)

    console.log(nome)

    return <form>
            <input type="text" value={nome} onChange={handleChange} name="nome"/>
        </form>
}

export default Formulario