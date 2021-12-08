import { useState } from "react"
import ItemCount from "./ItemCount"
const Main = () => {
    const handleOnAdd = () => {
        console.log("agregaste el producto al carrito")
    }
    return (
        <div className="main">
          <h2>Prueba del Contador</h2>
                <p>El contador va : 0 </p>
                <ItemCount stock={5} onAdd={handleOnAdd} inicial={0}/>  
        </div>
    )
}

export default Main
