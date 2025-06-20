import React, {useEffect, useRef} from "react";
import NavBar from "../navBar/navBar";
import { Button } from "react-bootstrap";
import "../../styles/heroSection.css";
import "../../index.css";
import InfoBar from "./infoBar";

const HeroSection = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const infoBarRef = useRef(null)
    const btnRef = useRef(null)


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

        if (titleRef.current) {observer.observe(titleRef.current);}
        if (subtitleRef.current) {observer.observe(subtitleRef.current);}
        if (infoBarRef.current) {observer.observe(infoBarRef.current);}
        if (btnRef.current) {observer.observe(btnRef.current);}


        return () => observer.disconnect();
    }, []);




    return (
        <div  className="hero-container text-white glow">
            <NavBar/>
            <div className="hero-content-wrapper">
                <div  className="hero-text-section">
                    <h1 ref = {titleRef} className="static-glow-animatable animatable fade-in slide-right display-1 title text-center text-md-start">
                        Bring Your Brand <br /> to Life Online
                    </h1>
                    <p ref = {subtitleRef} className="static-glow-animatable fade-in slide-right lead mb-4 text text-center text-md-start">
                        Professional web design, development & support under one roof
                    </p>

                    <div ref = {btnRef} className="static-glow-animatable fade-in slide-right d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                        <Button

                            variant="primary"
                            className=" rounded-pill px-4 py-2 static-glow-no-animation text"
                            href="#contactUs"
                        >
                            <span className="text">Get a Quote</span>
                        </Button>
                        <Button

                            variant="dark"
                            className=" rounded-pill px-4 py-2 text-white static-glow-no-animation text"
                            href="#projects"
                        >
                            <span className="text">View Our Past Work</span>
                        </Button>
                    </div>
                    <InfoBar/>
                </div>



            </div>
        </div>
    );
};

export default HeroSection;
