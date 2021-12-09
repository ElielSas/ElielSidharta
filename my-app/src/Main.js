import { useState } from "react"

import ItemList from "./ItemList"
const Main = () => {
    return (
        <div className="main">
          <h2>Prueba del Contador</h2>
                <p>El contador va : 0 </p>  
                <ItemList/>
        </div>
    )
}

export default Main
