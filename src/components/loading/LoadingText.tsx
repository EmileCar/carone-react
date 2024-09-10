import React, { useState, useEffect } from "react";

const LoadingText = () => {
    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots >= 3 ? 1 : prevDots + 1));
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="loading__text" style={{ fontStyle: "italic" }}>
            Bezig met laden{Array(dots).fill(".").join("")}
        </p>
    );
};

export default LoadingText;
