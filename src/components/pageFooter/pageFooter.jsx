import React, {useRef, useEffect} from 'react'
import "../../index.css"
import "../../styles/pageFooter.css"
import instaLogo from "../../assets/icons8-instagram-100.png"
import gmailLogo from "../../assets/icons8-gmail-100.png"

const PageFooter = () => {
    const textRef = useRef(null)
    const imagesRef = useRef(null)
    const copyRightRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("in", entry.isIntersecting);
                    entry.target.classList.toggle("visible", entry.isIntersecting)}
                );
            },
            { threshold: 0.1 }
        );
        if (copyRightRef.current) observer.observe(copyRightRef.current);
        if (imagesRef.current) observer.observe(imagesRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <div className="pageFooter glow">
            <h1 ref={textRef}  className="animatable fade-in slide-right static-glow-no-animation headFormat">Bring your brand to life online — with power, polish, and purpose.</h1>
            <div ref={imagesRef} className="animatable fade-in slide-left mediaBox">
                <a href="https://www.instagram.com/isolve._/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="Logo static-glow-no-animation"
                        src={instaLogo}
                        style={{width: "70%", height: "70%", margin: "2dvh"}}

                    />
                </a>

                <a href="mailto:isolveyyc@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="Logo static-glow-no-animation"
                        src={gmailLogo}
                        style={{width: "70%", height: "70%", margin: "2dvh"}}
                />

                </a>


            </div>
            <div ref={copyRightRef} className="animatable fade-in slide-right static-glow-no-animation bodyFormat">© 2025 ISolve | All rights reserved.</div>

        </div>)

}


export default PageFooter;