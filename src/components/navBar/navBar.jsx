import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../../styles/navBar.css';
import logo from '../../assets/logo.png';
import '../../App.css';
import Glow from './glow';
import '../../index.css';

const NavBar = () => {
    const [glowActive, setGlowActive] = useState(false);
    const [buttonGlow, setButtonGlow] = useState(false);
    const isMobile = window.innerWidth < 768;

    return (
        <Navbar expand="lg" className="mx-auto" style={{width: '100%'}}>
            <Container fluid className="px-4">

                {/* Logo */}
                <div className="logo-wrapper">
                    <Navbar.Brand href="#" className="p-0 m-0 d-flex align-items-center">
                        <img
                            src={logo}
                            alt="MySite Logo"
                            width="200"
                            className="d-inline-block align-top m-1 static-glow"
                        />
                    </Navbar.Brand>
                </div>

                {/* Hamburger for mobile */}
                <Navbar.Toggle aria-controls="navbar-collapse" className="ms-auto white-toggle"/>

                {/* Collapsible nav pill */}
                <Navbar.Collapse id="navbar-collapse" className="justify-content-center justify-content-lg-end">
                    <div
                        className="position-relative"
                        onMouseEnter={() => !isMobile && setGlowActive(true)}
                        onMouseLeave={() => !isMobile && setGlowActive(false)}
                    >
                        {!isMobile && <Glow isActive={glowActive} time={3}/>}

                        <div
                            className="bg-dark px-4 py-2 rounded-pill d-flex gap-3 position-relative flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start"
                            style={{zIndex: 1}}
                        >
                            <Nav className="d-flex align-items-center flex-column flex-lg-row">
                                <Nav.Link href="#home" className="text-white px-3 static-glow">Home</Nav.Link>
                                <Nav.Link href="#about" className="text-white px-3 static-glow">About</Nav.Link>
                                <Nav.Link href="#projects" className="text-white px-3 static-glow">Our
                                    Projects</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </Navbar.Collapse>

                {/* Desktop Contact Button (inline) */}
                <div
                    className="position-relative ms-5 d-none d-lg-inline-block"
                    style={{height: '56px'}}
                    onMouseEnter={() => setButtonGlow(true)}
                    onMouseLeave={() => setButtonGlow(false)}
                >
                    <Glow isActive={buttonGlow} color="#2364cc" time={2} radius={100}/>
                    <Button
                        variant="primary"
                        className="fw-bold rounded-pill px-4 py-2"
                        style={{
                            height: '56px',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <span className="static-glow">Contact</span>
                    </Button>
                </div>
            </Container>

            {/* Mobile Contact Button (below pill) */}
            <div className="container-fluid d-flex d-lg-none justify-content-center mt-3 px-4">
                <Button
                    variant="primary"
                    className="fw-bold rounded-pill px-4 py-2"
                    style={{height: '56px'}}
                >
                    <span className="static-glow">Contact</span>
                </Button>
            </div>

        </Navbar>
    );
};

export default NavBar;
