import { Navbar, Nav, Container, NavbarToggle } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

import RLogo from '../../assets/images/navbar-logo.png';

import './HomeNavbar.css';

const HomeNavbar = () => {

    // State to track if the menu is active
    const [isActive, setIsActive] = useState(false);


      // Toggle the menu state when clicked
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    };

    return (


        // <Navbar bg="dark" variant="dark" expand="lg">
        //     <Container fluid>
        //         <NavbarToggle aria-controls="navbarScroll" />
        //             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll> 
        //                 <NavLink to="/" className="nav-link">Home</NavLink>
        //                 <NavLink to="/aboutme" className="nav-link">About Me</NavLink>
        //                 <NavLink to="/experience" className="nav-link">Experience</NavLink>
        //                 <NavLink to="/projects" className="nav-link">Projects</NavLink>
        //             </Nav>
        //     </Container>
        // </Navbar>


        <nav className="home-navbar">
            <a href="#home" className="nav-logo-link">
                {/* Find a better logo maybe depending on final site design */}
                <img src={RLogo} className='nav-logo' alt="R"></img>
            </a>
            {/* <div className="nav-logo">LogoFiller</div> */}
            <div className="nav-menu-toggle" id="mobile-menu-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li className = "nav-item">
                    <a href="#about" className="nav-link-item">
                        About
                    </a>

                </li>
                <li className = "nav-item">
                    <a href="#experience" className="nav-link-item">
                        Experience
                    </a>
                </li>

                <li className = "nav-item">
                    <a href="#projects" className="nav-link-item">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNavbar;