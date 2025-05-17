import React from "react";
import NavBar from "./navBar/navBar"; // Adjust path if needed
import "../styles/infoBar.css";
import "../index.css"

const items = [
    {label:"Pixel Perfect Designs"},
    {label:"Available To Anyone, Anywhere"},
    {label:"Completely Unique To You, For You"},

]

const InfoBar = () => {

    return (

        <div className="info-bar">
            {items.map((item, idx) => (
            <div key={idx} className="info-bar__item">
                <div className="info-bar__indicator"/>
                <span className="info-bar__label hover-scale">{item.label}</span>
            </div>
            ))}
        </div>
    )
}

export default InfoBar;