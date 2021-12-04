import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
const Nav = () => {
    return (
        <nav id="main-nav" className="nav">
           <Button className="boton" variant="danger"><a href="#">Productos</a></Button> 
           <Button className="boton" variant="danger"><a href="#">Promociones</a></Button>  
           <Button className="boton" variant="danger"><a href="#">Contacto</a></Button> 
           <CartWidget/>
    </nav>
    )
}

export default Nav
