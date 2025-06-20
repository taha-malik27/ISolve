import React, {useEffect, useRef} from "react";
import NavBar from "../navBar/navBar"; // Adjust path if needed
import "../../styles/infoBar.css";
import "../../index.css"

const items = [
    {label:"Pixel Perfect Designs"},
    {label:"Available To Anyone, Anywhere"},
    {label:"Completely Unique To You, For You"},

]

const InfoBar = () => {
    const infoBarRef = useRef(null);

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
        if (infoBarRef.current) {observer.observe(infoBarRef.current);}

        return () => observer.disconnect();
    }, []);

    return (

        <div ref = {infoBarRef} className = "animatable fade-in info-bar">
            {items.map((item, idx) => (
            <div key={idx} className="info-bar__item">
                <div className="info-bar__indicator"/>
                <span className="info-bar__label hover-scale text">{item.label}</span>
            </div>
            ))}
        </div>
    )
}

export default InfoBar;
