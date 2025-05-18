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
