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

const ScrollToTopOptions = ({
    displayType = "text",
    imageSrc,
    myClass = "",
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
            ? `scroll_top ${myClass} visible `
            : `scroll_top ${myClass}`,
        onClick: scrollToTop,
    };

    let content;

    switch (displayType) {
        case "text":
            content = <div {...commonProps}>{text}</div>;
            break;
        case "htmlArrow":
            content = <div {...commonProps}>&#8682;</div>;
            break;
        case "image":
            content = imageSrc ? (
                <img src={imageSrc} alt="To top" {...commonProps} />
            ) : (
                <div {...commonProps}>{text}</div>
            );
            break;
    }

    return content;
};

export default ScrollToTopOptions;
