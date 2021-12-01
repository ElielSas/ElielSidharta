import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';

const App = () => {

    const producto = {titulo:"Producto 1"}
    
    return (
        <>
             <Header producto={producto} saludo="Hola Mundo" />
             <Main/>
             <ItemListContainer/>
             <Footer/>
        </>
    )
}

export default App;