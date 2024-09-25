import React, { useState, useEffect, useMemo } from "react";
import "../../styles/Hero.css";

export interface HeroSliderProps {
    imagePaths?: string[];
    interval?: number;
    altText?: string;
    blurredImagePath?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
    imagePaths = [],
    interval = 7000,
    altText = "Hero image",
    blurredImagePath = "hero-blurred",
}) => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(imagePaths.length).fill(false));
    const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

    useEffect(() => {
        if(!allImagesLoaded) return;
        const effectiveInterval = Math.max(interval, 1000);
        const intervalObj = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, effectiveInterval);

        return () => {
            clearInterval(intervalObj);
        };
    }, [imagePaths.length, allImagesLoaded]);

    useEffect(() => {
        const loadImages = () => {
            imagePaths.forEach((imagePath, index) => {
                const img = new Image();
                img.src = imagePath;
                img.onload = () => {
                    setLoadedImages((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        if (updated.every((status) => status)) {
                            setAllImagesLoaded(true);
                        }
                        return updated;
                    });
                };
            });
        };

        loadImages();
    }, [imagePaths]);

    return (
        <div className="carone-hero-images layered-grid">
            {imagePaths.map((imagePath, index) => (
                <div
                    key={imagePath}
                    className={`carone-hero-images__image ${
                        index === activeImageIndex ? "carone-hero-images__image--active" : ""
                    }`}
                >
                    <img
                        src={imagePath}
                        alt={altText}
                        style={{ display: loadedImages[index] ? "block" : "none" }}
                    />
                </div>
            ))}
            {!allImagesLoaded && (
                <div className="hero__image active">
                    <img
                        src={blurredImagePath}
                        alt="Hero blurred image"
                    />
                </div>
            )}
        </div>
    );
};

export default HeroSlider;
