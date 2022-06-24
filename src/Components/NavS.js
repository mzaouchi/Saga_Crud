import { Navbar,Container,Nav } from "react-bootstrap"
import {Link} from 'react-router-dom'
const NavS=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Test Saga</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>    
          <Nav.Link as={Link} to='/Users'>Users</Nav.Link>         
        </Nav>
        </Container>
      </Navbar>
    
    )
}

export default NavS