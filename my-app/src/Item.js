import {useEffect} from "react"
import "./style.css"
const productos = [{img:"./ipa.jpg",id: 1, title:"cerveza IPA", stock:6, price:"$230"}]

function Item() {
    
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
        </div>
    )}

export default Item
