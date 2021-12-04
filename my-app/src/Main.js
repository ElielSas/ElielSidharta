import { useState } from "react"
const Main = () => {
    
    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
        console.log("Aumentar contador")
        setContador(contador + 1 )
    }
    return (
        <div className="main">
          <h2>Prueba del Contador</h2>
                <p>El contador va : {contador} </p>
                <button onClick={aumentarContador}>Aumentar</button> 
        </div>
    )
}

export default Main
