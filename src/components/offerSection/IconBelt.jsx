import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    FiPenTool,
    FiSmartphone,
    FiCodesandbox,
    FiServer,
    FiZap,
    FiBarChart2,
    FiShield,
    FiHardDrive,
    FiHeadphones,
    FiCompass
} from 'react-icons/fi';
import '../../styles/IconBelt.css';
import './../../index.css'

const features = [
    { title: 'UX/UI Design',          Icon: FiPenTool     },
    { title: 'Responsive Layout',     Icon: FiSmartphone  },
    { title: 'Front-end Development', Icon: FiCodesandbox },
    { title: 'Back-end Development',  Icon: FiServer      },
    { title: 'Performance',           Icon: FiZap         },
    { title: 'SEO & Analytics',       Icon: FiBarChart2   },
    { title: 'Security',              Icon: FiShield      },
    { title: 'Deployment & DevOps',   Icon: FiHardDrive   },
    { title: 'Support & Maintenance', Icon: FiHeadphones  },
    { title: 'Consulting & Strategy', Icon: FiCompass     },
];

export default function IconBelt() {
    const containerRef = useRef(null);
    const cellWidthRef = useRef(0);
    const offsetRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const beltRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("in", entry.isIntersecting);
                    entry.target.classList.toggle("visible", entry.isIntersecting);
                });
            },
            { threshold: 0.01 }
        );

        if (beltRef.current)  observer.observe(beltRef.current);


        return () => observer.disconnect();
    }, []);




    // Measure cell & container once
    useEffect(() => {
        const c = containerRef.current;
        const cell = c.querySelector('.icon-cell');
        if (!cell) return;
        const cw = c.clientWidth;                     // 740 px
        const w  = cell.getBoundingClientRect().width;
        cellWidthRef.current = w;
        offsetRef.current    = (cw - w) / 2;
        // center first
        c.scrollLeft = 0 * w - offsetRef.current;
    }, []);

    // Wheel → step activeIndex, scroll items under fixed center
    const onWheel = useCallback(e => {
        e.preventDefault();
        const dir = e.deltaY > 0 ? 1 : -1;  // down→next, up→prev
        setActiveIndex(prev => {
            const next = Math.max(0, Math.min(features.length - 1, prev + dir));
            if (next !== prev) {
                const c = containerRef.current;
                const w = cellWidthRef.current;
                const off = offsetRef.current;
                c.scrollTo({ left: next * w - off, behavior: 'smooth' });
            }
            return next;
        });
    }, []);

    // Attach wheel only on the belt
    useEffect(() => {
        const el = containerRef.current;
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [onWheel]);

    return (
        <div ref = {beltRef} className="icon-belt-container animatable fade-in slide-left">
            <div className="icon-belt-wrapper">
                {/* fixed width 740px; fixed height for 2.5× scaled icons */}
                <div className="icon-belt" ref={containerRef}>
                    {features.map(({ title, Icon }, i) => (
                        <div
                            key={i}
                            className={`icon-cell${i === activeIndex ? ' active' : ''}`}
                            title={title}
                        >
                            <Icon color="#fff" size={"23px"} />
                        </div>
                    ))}
                </div>
                <div className="focus-marker" />
            </div>
            <div className="icon-label">
                {features[activeIndex].title}
            </div>
        </div>
    );
}
