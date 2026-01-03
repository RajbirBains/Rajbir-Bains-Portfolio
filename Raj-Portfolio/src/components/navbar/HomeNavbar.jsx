import { Navbar, Nav, Container, NavbarToggle } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const HomeNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavbarToggle aria-controls="navbarScroll" />
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll> 
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/aboutme" className="nav-link">About Me</NavLink>
                        <NavLink to="/experience" className="nav-link">Experience</NavLink>
                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default HomeNavbar;