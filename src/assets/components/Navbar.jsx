import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarBootstrap = () => {
    return (
        <Navbar expand="lg" className="px-0"
          bg="danger"
          variant="danger"
        >
          <Container className="justify-content-start">
            <Link
                to="/"
                className="text-white ms-3 text-decoration-none"
            >
            🏠 Home 
            </Link>
            <Link
                to="/contacto"
                className="text-white ms-3 text-decoration-none"
            >
            📒 Contacto
            </Link>
          </Container>  
          <Container className="justify-content-end">
            <Navbar.Brand>  Happy Cake 🍰 </Navbar.Brand>            
          </Container>
    </Navbar> );
    };
export default NavbarBootstrap;