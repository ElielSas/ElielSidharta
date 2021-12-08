import ItemCount from "./ItemCount"
function ItemListContainer() {
    const handleOnAdd = () => {
        console.log("agregaste el producto al carrito")
    }
    return (
        <div>
            <h1>Items</h1>
            <ItemCount stock={5} onAdd={handleOnAdd} inicial={0}/>
        </div>
    )
}

export default ItemListContainer
