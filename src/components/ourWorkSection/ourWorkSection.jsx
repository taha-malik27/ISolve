import React, { useRef, useEffect } from 'react';
import {Stack} from "react-bootstrap";
import "../../styles/ourWorkSection.css"
import illumi from "../../assets/Illumi.png"

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

    return(
        <div className="ourWorkSection">

        {/* heading */}
        <div ref={headingRef} className="headingOurWork">
            <span className="underline-slide">Our Work</span>
        </div>

        <Stack gap = {5} className="stack">
            <div className="displayBox" style={{backgroundColor : "red"}}>
            <img
                src = {illumi}
            />

            </div>
            <div className="displayBox" style={{backgroundColor : "green"}}>2</div>
            <div className="displayBox" style={{backgroundColor : "blue"}}>3</div>
        </Stack>
        </div>
    )


}



export default OurWorkSection;
