import {useEffect} from "react"
import ItemCount from "./ItemCount"
import "./style.css"
const productos = [{img:"./ipa.jpg",id: 1, title:"cerveza IPA", stock:6, price:"$230"}]

function Item() {
    const handleOnAdd = () => {
        console.log("agregaste el producto al carrito")
    }
    
    useEffect(() => {
        setTimeout(() => {
            console.log("el componente ya se renderizo")
        },2000)
    }, [])
    return (
        <div className="containerItem">
            {productos.map((elemnto ,indice)=>{
                return <img src={elemnto.img} />
            })}
            {productos.map((elemnto ,indice)=>{
                return <p>Producto:{elemnto.title}</p>
            })}
            {productos.map((elemnto ,indice)=>{
                return <p>Precio:{elemnto.price}</p>
            })}
            <ItemCount stock={5} onAdd={handleOnAdd} inicial={0}/>
        </div>
    )}

export default Item
