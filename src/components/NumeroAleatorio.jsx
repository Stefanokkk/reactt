import { useState } from 'react'

const NumeroAleatorio = () => {
    const [controle, setControle] = useState(null)
    const [n, setN] = useState(0)
    const [backgroundColor, setBackground] = useState('red')
    
    const gerarAleatorio = () => {
        const num = Math.round(Math.random()*100)
        if(num < 10){
           setN('0' + num) 
        } else setN(num)
    }

    const iniciar = () => {
        if (controle !== null) return

        setControle(setInterval(trocarCor, 100))
    }

    const parar = () => {
        clearInterval(controle)
    }

    const trocarCor = () => {
        
        const [R, G, B] = [
            Math.round(Math.random()*255), 
            Math.round(Math.random()*255), 
            Math.round(Math.random()*255)
        ]

        setBackground(`rgb(${R}, ${G}, ${B})`)
    }
    

    return (
        <>
            <div style={{backgroundColor}}>{n}</div>
            <button onClick={gerarAleatorio} type="button">Gerar</button>
            <button onClick={iniciar} type="button">Começar</button>
            <button onClick={parar} type="button">Parar</button>
        </>
    )
}

export default NumeroAleatorio