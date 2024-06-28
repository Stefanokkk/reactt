import { useState } from "react"

const Formulario = () => {
    const [controle, setControle] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [estouDigitando, setEstouDigitando] = useState(false)

    const handleChangeNome = ({target: {value}}) => {
        setNome(value)
        digitando()
    }

    const handleChangeEmail = ({target: {value}}) => {
        setEmail(value)
        digitando()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        enviarDados
    }

    const enviarDados = () => {
        console.log(nome, email)
    }

    const digitando = () => {
        setEstouDigitando(true)
        clearInterval(controle)
        setControle(setTimeout(() => setEstouDigitando(false), 2000))
    }


    console.log(nome)
    console.log(email)

    return <form action={handleSubmit}>
            <div style={{display: estouDigitando ? 'block': 'none'}} className="digitando">digitando...</div>

            <input type="text" value={nome} onChange={handleChangeNome} name="nome"/>

            <input type="text" value={email} onChange={handleChangeEmail} name="email"/>
            
            <button type="submit">Enviar</button>
        </form>
}

export default Formulario