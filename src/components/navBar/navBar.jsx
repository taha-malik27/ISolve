import React, {useState, useEffect, useRef} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../../styles/navBar.css';
import logo from '../../assets/logo.png';
import '../../App.css';
import Glow from './glow';
import '../../index.css';

const SCROLL_STOP      = 40;   // navbar sticks at 40px from the top
const SLIDE_START      = 700;  // begin sliding after 700px of scroll
const SLIDE_DISTANCE   = 150;   // complete slide over the next 150px
const SLIDE_MULTIPLIER = 1;  // slide up by 100% of its height

const NavBar = () => {
    const [glowActive, setGlowActive]       = useState(false);
    const [buttonGlow, setButtonGlow]       = useState(false);
    const [slideFraction, setSlideFraction] = useState(0);
    const isMobile = window.innerWidth < 768;
    const navBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) =>{
                    entry.target.classList.toggle("in", entry.isIntersecting);
                    entry.target.classList.toggle("visible", entry.isIntersecting)}
                );
            },
            {threshold: 0.1}
        );
        if (navBarRef.current) {observer.observe(navBarRef.current);}

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        // On mobile, disable scroll animation
        if (isMobile) {
            setSlideFraction(0);
            return;
        }

        const handleScroll = () => {
            const y      = window.scrollY;
            const passed = Math.max(y - SLIDE_START, 0);
            const frac   = Math.min(passed / SLIDE_DISTANCE, 1);
            setSlideFraction(frac);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initialize on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <Navbar
            expand="lg"
            className="mx-auto"
            style={{
                position:     isMobile ? 'static' : 'sticky',
                top:          isMobile ? undefined : `${SCROLL_STOP}px`,
                width:        '100%',
                zIndex:       2000,
                transform:    isMobile
                    ? 'translateY(0)'
                    : `translateY(-${slideFraction * SLIDE_MULTIPLIER * 125}%)`,
                transition:   isMobile ? 'none' : 'transform 0.25s ease',
                pointerEvents: isMobile ? 'auto' : (slideFraction >= 1 ? 'none' : 'auto')
            }}
        >
            <Container fluid ref={navBarRef} className="animatable fade-in px-4">

                {/* Logo */}
                <div className="logo-wrapper">
                    <Navbar.Brand href="#" className="ps-2 ms-3 d-flex align-items-center">
                        <img
                            src={logo}
                            alt="MySite Logo"
                            width="180"
                            className="align-top static-glow-no-animation"
                            onClick={() => window.location.reload()}
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
                        {!isMobile && <Glow isActive={glowActive} time={3} color="#ffffff" />}

                        <div
                            className="bg-dark px-4 py-2 rounded-pill d-flex gap-3 position-relative flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start"
                            style={{ zIndex: 1 }}
                        >
                            <Nav className="d-flex align-items-center flex-column flex-lg-row">
                                <Nav.Link
                                    onClick={() => {
                                        window.location.href = '/';
                                    }}
                                    className="text-white px-3 static-glow-no-animation text"
                                >Home</Nav.Link>
                                <Nav.Link href="#about" className="text-white px-3 static-glow-no-animation text">About</Nav.Link>
                                <Nav.Link href="#projects" className="text-white px-3 static-glow-no-animation text">Our Projects</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </Navbar.Collapse>

                {/* Desktop Contact Button (inline) */}
                <div
                    className="position-relative ms-5 me-5 d-none d-lg-inline-block"
                    style={{ height: '56px' }}
                    onMouseEnter={() => setButtonGlow(true)}
                    onMouseLeave={() => setButtonGlow(false)}
                >
                    <Glow isActive={buttonGlow} color="#59c3ff" time={2} radius={175} />

                    <Button
                        href="#contactUs"
                        variant="primary"
                        className="contactBtn fw-bold rounded-pill px-4 py-2"
                        style={{
                            height: "56px",
                            lineHeight: "56px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            zIndex: 1,
                            textDecoration: "none",
                        }}
                    >
                        <span className="static-glow-no-animation contactBtn">Contact</span>
                    </Button>
                </div>

            </Container>
            {/* Mobile Contact Button (below pill)  CURRENTLY NOT NEEDED    */}
            {/*<div className="container-fluid d-flex d-lg-none justify-content-center mt-3 px-4 text">*/}
            {/*    <Button*/}
            {/*        variant="primary"*/}
            {/*        className="fw-bold rounded-pill px-4 py-2 text"*/}
            {/*        style={{height: '56px'}}*/}
            {/*    >*/}
            {/*        <span className="static-glow text">Contact</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </Navbar>
    );
};

export default NavBar;
