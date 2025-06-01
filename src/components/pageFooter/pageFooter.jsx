import React from 'react'
import "../../index.css"
import "../../styles/pageFooter.css"
import instaLogo from "../../assets/icons8-instagram-100.png"
import gmailLogo from "../../assets/icons8-gmail-100.png"

const PageFooter = () => {




    return (
        <div className="pageFooter glow">
            <h1 className="static-glow headFormat">Bring your brand to life online — with power, polish, and purpose.</h1>
            <div className="mediaBox">
                <a href="https://www.instagram.com/isolve._/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="Logo static-glow"
                        src={instaLogo}
                        style={{width: "70%", height: "70%", margin: "2dvh"}}

                    />
                </a>

                <a href="mailto:isolveyyc@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="Logo static-glow"
                        src={gmailLogo}
                        style={{width: "70%", height: "70%", margin: "2dvh"}}
                />

                </a>


            </div>
            <div className="static-glow bodyFormat">© 2025 ISolve | All rights reserved.</div>

        </div>)

}

export default PageFooter;