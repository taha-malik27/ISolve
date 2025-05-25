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
        // --- FADE-IN LOGIC for subtitle, body, and button ---
        const fadeElements = [subtitleRef.current, bodyRef.current, buttonRef.current].filter(Boolean);
        const fadeObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        fadeElements.forEach(el => fadeObserver.observe(el));

        // --- SLIDE-DOWN LOGIC for heading on downward scroll ---
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentY = window.pageYOffset;
            const isScrollingDown = currentY > lastScrollY;
            const headingEl = headingRef.current;
            if (headingEl) {
                const rect = headingEl.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                if (inView && isScrollingDown) {
                    headingEl.classList.add('slide-in');
                }
            }
            lastScrollY = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            fadeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="offer-container">
            <div ref={headingRef} className="headingOffer">
                <span className="underline-slide">What We Do</span>
            </div>

            <div ref={subtitleRef} className="subtitle title">
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
