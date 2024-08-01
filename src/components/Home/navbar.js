import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import name from '../../images/name.png';
import "./navbar.css";

function Navbars() {

  return (

    <Navbar className="navbar navbar-light" style={{ backgroundColor: "#59b256" }} expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand >
            <img className="logo" src={name} alt="Sharmila" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">          
              <LinkContainer to="/About">
                <Nav.Link><b>About</b></Nav.Link>
              </LinkContainer> 
              <LinkContainer to="/Skills">
                <Nav.Link><b>Skills</b></Nav.Link>
              </LinkContainer> 
              <LinkContainer to="/ProjectList">
                <Nav.Link><b>Project</b></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Experience">
                <Nav.Link><b>Experience</b></Nav.Link>
              </LinkContainer>  
              <LinkContainer to="/Contact">
                <Nav.Link><b>Contact</b></Nav.Link>
              </LinkContainer>  

           
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>

  )
}
export default Navbars;