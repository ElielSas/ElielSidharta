import {useEffect, useState} from "react"

const ItemDetail = (prop) => {
    const [items, setItems] = useState([])
    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setItems(json)
        })
        .catch(err=>console.log(err))
    },[])
    if(items.length === 0) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }else{
        return (
            <div>
                {prop.greeting}
                <ul>
                    {items.map(item=>(
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default ItemDetail
