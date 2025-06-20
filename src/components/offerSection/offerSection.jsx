// src/components/OfferSection.jsx

import React, { useRef, useEffect } from 'react';
import '../../styles/offerSection.css';
import "../../index.css";
import img2 from '../../assets/DesktopIMG.png';

const OfferSection = () => {
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const bodyRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                        entry.target.classList.toggle("in", entry.isIntersecting)
                        entry.target.classList.toggle("visible", entry.isIntersecting)
                    }
                );
            },
            { threshold: 0.1 }
        );

        if (headingRef.current) {observer.observe(headingRef.current);}
        if (subtitleRef.current) {observer.observe(subtitleRef.current);}
        if (bodyRef.current) {observer.observe(bodyRef.current);}
        if (buttonRef.current) {observer.observe(buttonRef.current);}

        return () => observer.disconnect();
    }, []);

    return (
        <div className="offer-container glow" id = "about">
            <div ref={headingRef}
                 className="headingOffer animatable fade-in slide-down"
            >
                <span className="underline-slide">What We Do</span>
            </div>

            <div ref={subtitleRef} className="animatable fade-in slide-left subtitle title">
                Ready to stand out in a crowded online world? Let us turn your vision into
                a captivating digital experience that converts.
            </div>

            <div ref={bodyRef} className="animatable fade-in slide-left left body">
                As businesses shift ever more online, we deliver end-to-end web solutions — from tailored UX/UI design and pixel-perfect front-end coding to robust back-end
                development, deployment, and ongoing support.
            </div>

            {/*<div ref={buttonRef} className="lmButton">*/}
            {/*    <Button*/}
            {/*        className="fade-in slide-left static-glow-animatable"*/}
            {/*        style={{*/}
            {/*            '--glow-color': '#000850',*/}
            {/*            backgroundColor: '#1f2937',*/}
            {/*            borderColor: '#1f2937',*/}
            {/*            color: 'aliceblue',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <span className="text fw-bold">Learn More</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}

            <img

                src={img2}
                alt="Offer Graphic"
                className="offer-image-mobile"
            />
        </div>
    );
};

export default OfferSection;
