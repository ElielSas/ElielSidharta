import Header from './Header'
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
const App = () => {

    const producto = {titulo:"Producto 1"}
    

    return (
        <>
             <Header producto={producto} saludo="Hola Mundo" />
             <ItemListContainer/>
             <ItemDetailContainer/>
             <Footer/>
        </>
    )
}

export default App;