import React, { useRef, useState, useEffect } from "react";
import classes from "./Slide.module.css";

export default function Slide(props) {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        updateArrows();
    }, []);

    const updateArrows = () => {
        const { current } = sliderRef;
        if (current) {
            setShowLeftArrow(current.scrollLeft > 0);
            setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
        updateArrows();
    };


    const scroll = (direction) => {
        const { current } = sliderRef;
        if (!current) return;

        const start = current.scrollLeft;
        const distance = direction === "left" ? -640 : 640;
        const duration = 600; // Giảm tốc độ (600ms)
        let startTime = null;

        const animateScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            current.scrollLeft = start + distance * easeOutQuad(progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    // Hàm easing giúp tạo hiệu ứng chậm dần
    const easeOutQuad = (t) => t * (2 - t);
    return (
        <div className={classes.slider_wrapper}>
            {showLeftArrow && (
                <button className={`${classes.arrow} ${classes.left}`} onClick={() => scroll("left")}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            )}
            <div className={classes.slider_container}>
                <div
                    className={classes.slider}
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onScroll={updateArrows} // Lắng nghe sự kiện cuộn
                >
                    {props.children}
                </div>
            </div>
            {showRightArrow && (
                <button className={`${classes.arrow} ${classes.right}`} onClick={() => scroll("right")}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            )}
        </div>
    );
}
