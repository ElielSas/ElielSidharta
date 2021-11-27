import Header from './Header'
import Main from './Main';
import Footer from './Footer';

const App = () => {

    const producto = {titulo:"Producto 1"}
    
    return (
        <>
             <Header producto={producto} saludo="Hola Mundo" />
             <Main/>
             <Footer/>
        </>
    )
}

export default App;