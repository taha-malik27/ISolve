// src/components/glow.jsx

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Glow = ({
                  isActive,
                  color = '#000',
                  time = 2,
                  radius = 60,    // corner radius
              }) => {
    // Always call hooks at top‐level:
    const shapeRef = useRef(null);
    const [length, setLength] = useState(0);

    // Detect mobile viewport
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Only compute total length if not mobile
    useEffect(() => {
        if (isMobile) return;

        if (shapeRef.current) {
            try {
                const total = shapeRef.current.getTotalLength();

                console.log('[Glow] total perimeter (user-units):', total);

                setLength(total);
            } catch (err) {
                console.warn('Glow tracer disabled:', err);
                setLength(0);
            }
        }
    }, [isMobile]);

    // Early return for mobile — hooks have already been called
    if (isMobile) {
        return null;
    }

    const dash = 300;
    const gap = Math.max(length - dash, 0);

    return (
        <svg
            viewBox="0 0 300 56"                                    //   sets the internal SVG coordinate system to 300×56 user‐units
            preserveAspectRatio="none"                              //   allows the SVG to stretch freely to fill its container
            className="position-absolute top-0 start-0 w-100 h-100" //   absolutely positions the SVG to cover its parent
            style={{
                zIndex: 0,                                          //   places the glow behind other elements
                filter: `blur(5px) drop-shadow(0 0 6px ${color})`,  //   applies a blur and a colored shadow for the glow effect
                opacity: isActive ? 1 : 0,                          //   toggles visibility based on the isActive prop
                transition: 'opacity 0.3s ease-in-out',             //   animates the fade‐in/fade‐out of the glow
            }}
        >


            <style>
                {`
                @keyframes dash {
                    from {stroke-dashoffset: 0;}                  /*     animation start: dash begins at offset 0 */
                    to   {stroke-dashoffset: -${length}px;}       /*     animation end: dash offset moves by –length units (one full loop)*/
                }
                `}
            </style>

            <rect
                ref={shapeRef}                                      //     React ref used to measure the path length programmatically
                x="0"
                y="0"                                               //     places the rectangle at the top-left corner of the SVG
                width="300"
                height="56"                                         //     sets the rectangle dimensions to match the viewBox
                rx={radius}
                ry={radius}                                         //     applies rounded corners with the given radius
                fill="none"                                         //     makes the rectangle interior transparent
                stroke={color}                                      //     sets the outline color of the rectangle
                strokeWidth="15"                                    //     sets the thickness of the outline
                strokeDasharray={`${dash} ${gap}`}                  //     defines a dash and gap pattern for the stroke
                style={{
                    animation: `dash ${time}s linear infinite`      //     applies the CSS keyframe animation, looping forever
                }}
            />
        </svg>

    );
};

export default Glow;
