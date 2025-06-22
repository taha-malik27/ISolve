import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    FiPenTool, FiSmartphone, FiCodesandbox, FiServer, FiZap,
    FiBarChart2, FiShield, FiHardDrive, FiHeadphones, FiCompass
} from 'react-icons/fi';
import '../../styles/IconBelt.css';
import './../../index.css';

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

export default function IconBelt({ className }) {
    const scaleRef     = useRef(null);      // for zoom‐scale only
    const beltRef      = useRef(null);      // for slide‐in only
    const containerRef = useRef(null);      // for scroll logic
    const cellWidthRef = useRef(0);
    const offsetRef    = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // 1) Slide-in observer on beltRef
    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("in", entry.isIntersecting);
                    entry.target.classList.toggle("visible", entry.isIntersecting);
                });
            },
            { threshold: 0.01 }
        );
        if (beltRef.current) obs.observe(beltRef.current);
        return () => obs.disconnect();
    }, []);

    // 2) Zoom-aware scaling on scaleRef (desktop only)
    useEffect(() => {
        const mql = window.matchMedia('(min-width:769px)');
        function updateScale() {
            if (!scaleRef.current) return;
            if (!mql.matches) {
                scaleRef.current.style.transform = '';
                return;
            }
            const ratio = window.devicePixelRatio || 1;
            const scale = ratio > 1 ? 1 / ratio : 1;
            scaleRef.current.style.transform       = `scale(${scale})`;
            scaleRef.current.style.transformOrigin = 'top center';
        }
        window.addEventListener('resize', updateScale);
        updateScale();
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    // 3) Measure & center first icon (unchanged)
    useEffect(() => {
        const c = containerRef.current;
        const cell = c.querySelector('.icon-cell');
        if (!cell) return;
        const cw = c.clientWidth;
        const w  = cell.getBoundingClientRect().width;
        cellWidthRef.current = w;
        offsetRef.current    = (cw - w) / 2;
        c.scrollLeft = -offsetRef.current;
    }, []);

    // 4) scroll helper + wheel (unchanged)
    const scrollToIndex = useCallback(idx => {
        const c = containerRef.current;
        c.scrollTo({
            left: idx * cellWidthRef.current - offsetRef.current,
            behavior: 'smooth'
        });
    }, []);
    const onWheel = useCallback(e => {
        e.preventDefault();
        const dir = e.deltaY > 0 ? 1 : -1;
        setActiveIndex(prev => {
            const next = Math.min(features.length - 1, Math.max(0, prev + dir));
            if (next !== prev) scrollToIndex(next);
            return next;
        });
    }, [scrollToIndex]);
    useEffect(() => {
        const el = containerRef.current;
        if (window.matchMedia('(min-width:769px)').matches) {
            el.addEventListener('wheel', onWheel, { passive: false });
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, [onWheel]);

    // 5) Render
    return (
        <div ref={scaleRef}
             className={`icon-belt-container ${className||''}`}>
            {/* Slide-in wrapper */}
            <div ref={beltRef}
                 className="animatable fade-in slide-left">

                <div className="icon-belt-wrapper">
                    <div className="icon-belt" ref={containerRef}>
                        {features.map(({ title, Icon }, i) => (
                            <div
                                key={i}
                                className={`icon-cell${i===activeIndex?' active':''}`}
                                title={title}
                                onClick={() => {
                                    setActiveIndex(i);
                                    if (window.matchMedia('(min-width:769px)').matches) {
                                        scrollToIndex(i);
                                    }
                                }}>
                                <Icon color="#fff" size="23px" />
                            </div>
                        ))}
                    </div>
                    <div className="focus-marker"/>
                </div>

                <div className="icon-label">
                    {features[activeIndex].title}
                </div>
            </div>
        </div>
    );
}
