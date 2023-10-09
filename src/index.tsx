import React, { useEffect, useState } from "react";
import "./index.css";

type ScrollToTopProps = {
    displayType?: "text" | "htmlArrow" | "image";
    imageSrc?: string;
    myClass?: string;
    text?: string;
    threshold?: number;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const ScrollToTop = ({
    displayType = "text",
    imageSrc,
    myClass = "scroll_top",
    text = "Top",
    threshold = 150,
    }: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    const commonProps = {
        className: isVisible
            ? `${myClass} visible`
            : `${myClass}`,
        onClick: scrollToTop,
    };

    switch (displayType) {
        case "text":
            return <div {...commonProps}>{text}</div>;
        case "htmlArrow":
            return <div {...commonProps}>&#x21e7;</div>;
        case "image":
            return imageSrc ? (
                <img src={imageSrc} alt="To top" loading="lazy" {...commonProps}/>
            ) : (
                <div {...commonProps}>{text}</div>
            );
    }
};

export default ScrollToTop;
