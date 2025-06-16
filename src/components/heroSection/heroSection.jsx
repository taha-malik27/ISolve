import React from "react";
import NavBar from "../navBar/navBar";
import { Button } from "react-bootstrap";
import "../../styles/heroSection.css";
import "../../index.css";
import InfoBar from "./infoBar";

const HeroSection = () => {
    return (
        <div className="hero-container text-white glow">
            <NavBar />

            <div className="hero-content-wrapper">
                <div className="hero-text-section">
                    <h1 className="display-1 static-glow title text-center text-md-start">
                        Bring Your Brand <br /> to Life Online
                    </h1>
                    <p className="lead mb-4 text text-center text-md-start">
                        Professional web design, development & support under one roof
                    </p>

                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                        <Button
                            variant="primary"
                            className="rounded-pill px-4 py-2 static-glow text"
                            href="#contactUs"
                        >
                            <span className="text">Get a Quote</span>
                        </Button>
                        <Button
                            variant="dark"
                            className="rounded-pill px-4 py-2 text-white static-glow text"
                            href="#projects"
                        >
                            <span className="text">View Our Past Work</span>
                        </Button>
                        <InfoBar/>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HeroSection;
