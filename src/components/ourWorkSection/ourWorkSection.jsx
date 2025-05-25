// OurWorkSection.jsx
import React, { useRef, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import '../../styles/ourWorkSection.css';

const OurWorkSection = () => {
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

    return (
        <div className="ourWorkSection">
            {/* Heading */}
            <div ref={headingRef} className="pt-5 headingOurWork">
                <span className="underline-slide cardGlow">Our Work</span>
            </div>

            <Stack gap={5} className="stack">
                {/* Left Project: IllumiYYC */}
                <div className="leftDisplayBox">
                    <div className="leftCard">
                        <div className="cardGlow fw-bold fs-5 mb-2">IllumiYYC</div>
                        <span className="cardGlow">
                            A custom-designed, responsive website developed for IllumiYYC, a Calgary-based automotive
                            customization brand. The platform highlights premium services such as ambient lighting,
                            starlight headliners, and body kits through an intuitive layout, interactive galleries,
                            and streamlined quote requests.
                        </span>
                        <div className="pt-3">
                            <a className="btn btn-outline-light mt-3" href="https://illumiyyc.com" target="_blank" rel="noopener noreferrer">
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
                <div className="rightDisplayBox">
                    <div className="iframeWrapper">
                        <iframe
                            src="https://hkcutz.info/"
                            className="embeddedIframe"
                            allowFullScreen
                            title="HKCUTZ Site Preview"
                        ></iframe>
                    </div>

                    <div className="rightCard">
                        <div className="cardGlow fw-bold fs-5 mb-2">HKCUTZ</div>
                        <span className="cardGlow">
                            A sleek, mobile-first website designed for HKCUTZ, a Calgary-based barber known for precision
                            grooming. The site features automated booking, clear service listings, client testimonials,
                            and a modern visual gallery. Built for seamless user experience, it reflects the shop’s
                            professional brand and commitment to quality.
                        </span>
                        <div className="pt-3">
                            <a className="btn btn-outline-light mt-3" href="https://hkcutz.info" target="_blank"
                               rel="noopener noreferrer">
                                Visit Site
                            </a>
                        </div>
                    </div>
                </div>
            </Stack>
        </div>
    );
};

export default OurWorkSection;