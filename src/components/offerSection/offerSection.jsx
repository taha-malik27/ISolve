// src/components/OfferSection.jsx

import React, { useRef, useEffect, useState } from 'react';
import '../../styles/offerSection.css';
import { Button } from 'react-bootstrap';
// ← import the same asset you were using in CSS
import img2 from '../../assets/img2.png';

const OfferSection = () => {
    const containerRef = useRef(null);
    const [headingVisible, setHeadingVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeadingVisible(true);
                    obs.unobserve(entry.target);
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );
        if (containerRef.current) obs.observe(containerRef.current);
        return () => {
            if (containerRef.current) obs.unobserve(containerRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="offer-container">
            <div className={`heading ${headingVisible ? 'slide-in' : ''}`}>
                <span className="underline-slide">What We Do</span>
            </div>

            <div className="subtitle header">
                Ready to stand out in a crowded online world? Let us turn your vision into
                a captivating digital experience that converts.
            </div>

            <div className="body">
                As businesses shift ever more online, we deliver end‑to‑end web solutions—
                from tailored UX/UI design and pixel‑perfect front‑end coding to robust back‑end
                development, deployment, and ongoing support.
            </div>

            <div className="lmButton">
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

            {/* ← new: only on mobile will this show below the text */}
            <img
                src={img2}
                alt="Offer Graphic"
                className="offer-image-mobile"
            />
        </div>
    );
};

export default OfferSection;
