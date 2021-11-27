import Button from 'react-bootstrap/Button';
const Nav = () => {
    return (
        <nav id="main-nav" className="nav">
           <Button variant="danger"><a href="#">Vinos</a></Button> 
           <Button variant="danger"><a href="#">Promociones</a></Button>  
           <Button variant="danger"><a href="#">Contacto</a></Button> 
    </nav>
    )
}

export default Nav
