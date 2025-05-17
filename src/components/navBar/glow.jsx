// Glow.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Glow = ({
                  isActive,
                  color = '#000',
                  time = 2,
                  radius = 60        // <-- new prop, default to 28px
              }) => {
    const shapeRef = useRef(null);
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (shapeRef.current) {
            setLength(shapeRef.current.getTotalLength());
        }
    }, []);

    const dash = 150;
    const gap = length - dash;

    return (
        <svg
            viewBox="0 0 300 56"
            preserveAspectRatio="none"
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
                zIndex: 0,
                filter: `blur(5px) drop-shadow(0 0 6px ${color})`,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
            }}
        >
            <motion.rect
                ref={shapeRef}
                x="0"
                y="0"
                width="300"
                height="56"
                rx={radius}
                ry={radius}
                fill="none"
                stroke={color}
                strokeWidth="15"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={0}
                animate={{ strokeDashoffset: -length }}
                transition={{
                    duration: time,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            />
        </svg>
    );
};

export default Glow;
