// src/components/NavBar.jsx

import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../../styles/navBar.css';
import logo from '../../assets/logo.png';
import '../../App.css';
import Glow from './glow';
import '../../index.css';

const SCROLL_STOP      = 40;   // navbar sticks at 40px from the top
const SLIDE_START      = 250;  // begin sliding after 100px of scroll
const SLIDE_DISTANCE   = 120;   // complete slide over the next 80px
const SLIDE_MULTIPLIER = 1;  // slide up by 100% of its height

const NavBar = () => {
    const [glowActive, setGlowActive]       = useState(false);
    const [buttonGlow, setButtonGlow]       = useState(false);
    const [slideFraction, setSlideFraction] = useState(0);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        const handleScroll = () => {
            const y      = window.scrollY;
            const passed = Math.max(y - SLIDE_START, 0);
            const frac   = Math.min(passed / SLIDE_DISTANCE, 1);
            setSlideFraction(frac);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initialize on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            className="mx-auto"
            style={{
                position: 'sticky',
                top:      `${SCROLL_STOP}px`,
                width:    '100%',
                zIndex:   2000,
                transform:       `translateY(-${slideFraction * SLIDE_MULTIPLIER * 125}%)`,
                transition:      'transform 0.25s ease',
                pointerEvents:   slideFraction >= 1 ? 'none' : 'auto'
            }}
        >
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
                <Navbar.Toggle aria-controls="navbar-collapse" className="ms-auto white-toggle" />

                {/* Collapsible nav pill */}
                <Navbar.Collapse id="navbar-collapse" className="justify-content-center justify-content-lg-end">
                    <div
                        className="position-relative"
                        onMouseEnter={() => !isMobile && setGlowActive(true)}
                        onMouseLeave={() => !isMobile && setGlowActive(false)}
                    >
                        {!isMobile && <Glow isActive={glowActive} time={3} color={"#ffffff"} />}

                        <div
                            className="bg-dark px-4 py-2 rounded-pill d-flex gap-3 position-relative flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start"
                            style={{ zIndex: 1 }}
                        >
                            <Nav className="d-flex align-items-center flex-column flex-lg-row">
                                <Nav.Link href="#home"     className="text-white px-3 static-glow text">Home</Nav.Link>
                                <Nav.Link href="#about"    className="text-white px-3 static-glow text">About</Nav.Link>
                                <Nav.Link href="#projects" className="text-white px-3 static-glow text">Our Projects</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </Navbar.Collapse>

                {/* Desktop Contact Button (inline) */}
                <div
                    className="position-relative ms-5 d-none d-lg-inline-block text"
                    style={{ height: '56px' }}
                    onMouseEnter={() => setButtonGlow(true)}
                    onMouseLeave={() => setButtonGlow(false)}
                >
                    <Glow isActive={buttonGlow} color={"#59c3ff"} time={2} radius={100} />
                    <Button
                        variant="primary"
                        className="fw-bold rounded-pill px-4 py-2 text "
                        style={{ height: '56px', position: 'relative', zIndex: 1 }}
                    >
                        <span className="static-glow text">Contact</span>
                    </Button>
                </div>
            </Container>

            {/* Mobile Contact Button (below pill) */}
            <div className="container-fluid d-flex d-lg-none justify-content-center mt-3 px-4 text">
                <Button
                    variant="primary"
                    className="fw-bold rounded-pill px-4 py-2 text"
                    style={{ height: '56px' }}
                >
                    <span className="static-glow text">Contact</span>
                </Button>
            </div>
        </Navbar>
    );
};

export default NavBar;
