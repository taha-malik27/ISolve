import React, { useRef, useEffect } from 'react';
import "../../index.css"
import "../../styles/whyUsSection.css"


const WhyUsSection = () => {

    return(
        <div className="whyUsSectionContainer">
            <div className="reasonsContainer">

                {/*card 1*/}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="../../assets/collab.png" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h1 className={"header static-glow fs-3 cardHeader"}>Customer‑First,<br/> Collaborative Process</h1>
                            <p className={"text cardBody "}>We begin every engagement by deeply understanding your brand, audience, and business goals. Through iterative design reviews and transparent milestone check‑ins, you stay in control and get a site that truly reflects your vision.</p>

                        </div>
                    </div>
                </div>

                {/*card2*/}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="assets/logo.png" alt="Avatar" style={{width: '300px', height: '300px'}}/>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                {/*card3*/}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="assets/logo.png" alt="Avatar" style={{width: '300px', height: '300px'}}/>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                {/*card4*/}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="assets/logo.png" alt="Avatar" style={{width: '300px', height: '300px'}}/>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyUsSection;