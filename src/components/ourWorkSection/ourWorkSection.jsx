// OurWorkSection.jsx
import React, { useRef, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import '../../styles/ourWorkSection.css';

const OurWorkSection = () => {
    const headingRef = useRef(null);
    const topRef = useRef(null);
    const middleRef = useRef(null);
    const bottomRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('in', entry.isIntersecting);
                    entry.target.classList.toggle('visible', entry.isIntersecting);
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        if (topRef.current) observer.observe(topRef.current);
        if (middleRef.current) observer.observe(middleRef.current);
        if (bottomRef.current) observer.observe(bottomRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="ourWorkSection glow" id="projects">
            {/* Heading */}
            <div ref={headingRef} className="animatable fade-in slide-down pt-5 headingOurWork">
                <span className="underline-slide glow">Our Work</span>
            </div>

            <Stack gap={5} className="stack">
                {/* Left Project: IllumiYYC */}
                <div ref= {topRef} className="animatable slide-right fade-in leftDisplayBox">
                    <div className="leftCard">
                        <div className="cardTitle glow fw-bold">IllumiYYC</div>
                        <span className="glow">
                            A custom-designed, responsive website developed for IllumiYYC, a Calgary-based automotive
                            customization brand. The platform highlights premium services such as ambient lighting,
                            starlight headliners, and body kits through an intuitive layout, interactive galleries,
                            and streamlined quote requests.
                        </span>
                        <div className="pt-3">
                            <a className="btn btn-outline-light " href="https://illumiyyc.com" target="_blank"
                               rel="noopener noreferrer">
                                Visit Site
                            </a>
                        </div>
                    </div>

                    <div className="iframeWrapper">
                        <iframe
                            src="https://illumiyyc.com/"
                            className="embeddedIframe"
                            allowFullScreen
                            title="IllumiYYC Site Preview"
                        ></iframe>
                    </div>
                </div>

                {/* Right Project: HKCUTZ */}
                <div ref={ middleRef} className="animatable fade-in slide-left rightDisplayBox">
                    <div className="iframeWrapper">
                        <iframe
                            src="https://hkcutz.info/"
                            className="embeddedIframe"
                            allowFullScreen
                            title="HKCUTZ Site Preview"
                        ></iframe>
                    </div>

                    <div className="rightCard">
                        <div className="glow fw-bold cardTitle">HKCUTZ</div>
                        <span className="glow">
                            A sleek, mobile-first website designed for HKCUTZ, a Calgary-based barber known for precision
                            grooming. The site features automated booking, clear service listings, client testimonials,
                            and a modern visual gallery. Built for seamless user experience, it reflects the shop’s
                            professional brand and commitment to quality.
                        </span>
                        <div className="pt-3">
                            <a className="btn btn-outline-light " href="https://hkcutz.info" target="_blank"
                               rel="noopener noreferrer">
                                Visit Site
                            </a>
                        </div>
                    </div>
                </div>


                <div ref= {bottomRef} className="animatable slide-right fade-in leftDisplayBox">
                    <div className="leftCard">
                        <div className="cardTitle glow fw-bold">LEDAUTO</div>
                        <span className="glow">
                          LEDAUTO is a Surrey, BC–based automotive lighting specialist with over a decade of hands-on experience.
                          They’ve transformed 500+ cars for 500+ happy clients, offering premium services like app-controlled ambient light kits,
                          custom starlight headliners, and weather-resistant underglow installations.
                          The responsive site features interactive galleries, detailed service overviews, FAQs, and a streamlined quote request form.
                        </span>
                        <div className="pt-3">
                            <a
                                className="btn btn-outline-light"
                                href="https://ledauto.info/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Site
                            </a>
                        </div>
                    </div>

                    <div className="iframeWrapper">
                        <iframe
                            src="https://ledauto.info/"
                            className="embeddedIframe"
                            allowFullScreen
                            title="LEDAUTO Site Preview"
                        ></iframe>
                    </div>
                </div>


            </Stack>
        </div>
    );
};

export default OurWorkSection;

