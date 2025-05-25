// src/components/WhyUsSection.jsx

import React, { useRef, useEffect } from 'react';
import collabIcon from '../../assets/collab.png';
import gearIcon   from '../../assets/gear.png';
import codeIcon   from '../../assets/code.png';
import shieldIcon from '../../assets/shield.png';
import bgVideo    from '../../assets/WhyUsBG.mp4';

import '../../index.css';
import '../../styles/whyUsSection.css';

const WhyUsSection = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('slide-in', entry.isIntersecting);
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);

    const imgStyle  = { maxWidth: '350px', maxHeight: '350px' };
    const imgStyle2 = { maxWidth: '320px', maxHeight: '320px' };

    return (
        <div className="whyUsSectionContainer h-auto">
            {/* video background */}
            <video
                className="background-video border-1"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* heading */}
            <div ref={headingRef} className="headingWhyUs">
                <span className="underline-slide">Why Choose ISolve</span>
            </div>

            {/* flip‑cards */}
            <div className="reasonsContainer">

                {/* card 1 */}
                <div
                    className="flip-card"
                    onClick={e => e.currentTarget.classList.toggle('is-flipped')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ paddingTop: '5%' }}>
                            <img
                                src={collabIcon}
                                alt="Collaborative Process"
                                style={imgStyle2}
                                className="intense-blue-glow"
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="header static-glow fs-3 cardHeader">
                                Personalized Collaboration
                            </h1>
                            <p className="text cardBody">
                                We start by learning your brand’s story and goals, then refine
                                layouts together at each stage. You stay involved and get a
                                website that truly matches your vision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div
                    className="flip-card"
                    onClick={e => e.currentTarget.classList.toggle('is-flipped')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                                src={gearIcon}
                                alt="Project Management"
                                style={imgStyle2}
                                className="intense-blue-glow"
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="header static-glow fs-3 cardHeader">
                                End‑to‑End Project Management & Support
                            </h1>
                            <p className="text cardBody">
                                From first sketches through launch and routine updates, we
                                handle every step. With a single point of contact and clear
                                schedule, you’ll always know what’s happening—no surprises.
                            </p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div
                    className="flip-card"
                    onClick={e => e.currentTarget.classList.toggle('is-flipped')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ paddingTop: '10%' }}>
                            <img
                                src={codeIcon}
                                alt="Tech Stack"
                                style={imgStyle}
                                className="intense-blue-glow"
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="header static-glow fs-3 cardHeader">
                                Flexible Design That Grows With You
                            </h1>
                            <p className="text cardBody">
                                We build on a sturdy foundation so you can easily add features—
                                like online stores or booking tools—as your needs evolve,
                                without starting from scratch.
                            </p>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div
                    className="flip-card"
                    onClick={e => e.currentTarget.classList.toggle('is-flipped')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front pt-3 ps-3">
                            <img
                                src={shieldIcon}
                                alt="Security & SEO"
                                style={imgStyle2}
                                className="intense-blue-glow"
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="header static-glow fs-3 cardHeader">
                                Quick, Safe & Inclusive
                            </h1>
                            <p className="text cardBody">
                                Your site will load fast, stay secure against threats, and work
                                smoothly for all visitors—even those using assistive tools—for
                                a seamless experience everyone can enjoy.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyUsSection;
