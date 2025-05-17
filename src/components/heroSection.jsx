import React from "react";
import NavBar from "./navBar/navBar"; // Adjust path if needed
import { Button } from "react-bootstrap";
import "../styles/heroSection.css";
import "../index.css"
import InfoBar from "./infoBar";

const HeroSection = () => {
    return (
        <div className="hero-container text-white">
            <NavBar className="mt-auto" />

            <div className="d-flex flex-column justify-content-center align-items-start px-4 position-relative" style = {{height: "75%"}}>
                <h1 className="display-1 static-glow">Bring Your Brand <br /> to Life Online</h1>
                <p className="lead mb-4 ">Professional web design, development & support under one roof</p>

                <div className="d-flex gap-3">
                    <Button variant="primary" className="rounded-pill px-4 py-2 static-glow">
                        Get a Quote
                    </Button>
                    <Button variant="dark" className="rounded-pill px-4 py-2 text-white static-glow">
                        View Our Past Work
                    </Button>

                </div>
                <InfoBar/>
            </div>

        </div>
    );
};

export default HeroSection;
