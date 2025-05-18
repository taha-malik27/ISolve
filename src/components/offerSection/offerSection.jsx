// src/components/OfferSection.jsx

import React, { useRef, useEffect } from 'react';
import '../../styles/offerSection.css';
import { Button } from 'react-bootstrap';
import img2 from '../../assets/img2.png';

const OfferSection = () => {
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const bodyRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                    } else {
                        entry.target.classList.remove('slide-in');
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        [headingRef, subtitleRef, bodyRef, buttonRef].forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="offer-container">
            <div ref={headingRef} className="heading">
                <span className="underline-slide">What We Do</span>
            </div>

            <div ref={subtitleRef} className="subtitle header">
                Ready to stand out in a crowded online world? Let us turn your vision into
                a captivating digital experience that converts.
            </div>

            <div ref={bodyRef} className="body">
                As businesses shift ever more online, we deliver end-to-end web solutions—
                from tailored UX/UI design and pixel-perfect front-end coding to robust back-end
                development, deployment, and ongoing support.
            </div>

            <div ref={buttonRef} className="lmButton">
                <Button
                    className="static-glow"
                    style={{
                        '--glow-color': '#000850',
                        backgroundColor: '#1f2937',
                        borderColor: '#1f2937',
                        color: 'aliceblue',
                    }}
                >
                    <span className="text fw-bold">Learn More</span>
                </Button>
            </div>

            <img
                src={img2}
                alt="Offer Graphic"
                className="offer-image-mobile"
            />
        </div>
    );
};

export default OfferSection;
