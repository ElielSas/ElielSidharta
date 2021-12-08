import React, {useState} from "react";
const ItemCount = ({stock, onAdd, inicial}) => {
    const [counter,setCount] = useState(1);

    const handleMinus = () => {
        if (counter > inicial) {
            setCount(counter-1);
        }
    }
    const handleAdd = () => {
        if (counter < stock) {
            setCount(counter + 1)
        }
    }
    return(
        <div>
            <p>
                {counter}
            </p>
            <div>
                <button onClick={handleMinus}>-</button>
                <button onClick={handleAdd}>+</button>
                <button onClick={() => onAdd()} type='button'>Agregar Al Carrito</button>
            </div>
        </div>

    )
}
export default ItemCount