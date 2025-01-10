import React, { useState, useEffect, useMemo } from "react";

/**
 * The props for each image in the HeroSlider component
 */
export interface HeroSliderImageProps {
    /** The path to the image */
    path: string;
    /** The alt text for the image */
    alt?: string;
    /** A custom class name to apply to the image */
    className?: string;
    /** A custom style object to apply to the image */
    style?: React.CSSProperties;
}

/*
 * The props for the HeroSlider component
 */
export interface HeroSliderProps {
    /** The array of images to display in the slider. If there is only one image, it will be displayed without a slider */
    images: HeroSliderImageProps[];
    /** The interval in milliseconds between image transitions */
    interval?: number;
    /** The path to the blurred image */
    blurredImagePath?: HeroSliderImageProps;
}

/**
 * A hero slider component that can be customized with different props.
 *
 * @param {HeroSliderProps} props the props for the component
 * @returns {React.ReactElement} the hero slider component
 */
const HeroSlider: React.FC<HeroSliderProps> = ({
    images = [],
    interval = 7000,
    blurredImagePath,
}) => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));
    const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

    useEffect(() => {
        if(!allImagesLoaded || images.length <= 1) return;
        const effectiveInterval = Math.max(interval, 1000);
        const intervalObj = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, effectiveInterval);

        return () => {
            clearInterval(intervalObj);
        };
    }, [images.length, allImagesLoaded]);

    useEffect(() => {
        const loadImages = () => {
            images.forEach((image, index) => {
                const img = new Image();
                img.src = image.path;
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
    }, [images]);

    return (
        <div className="carone-hero-images layered-grid">
            {images.map((image, index) => (
                <div
                    key={image.alt}
                    className={`carone-hero-images__image ${
                        index === activeImageIndex ? "carone-hero-images__image--active" : ""
                    }`}
                >
                    <img
                        src={image.path}
                        className={image.className ?? ''}
                        alt={image.alt}
                        style={{
                            display: loadedImages[index] ? "block" : "none",
                            ...image.style,
                        }}
                    />
                </div>
            ))}
            {(blurredImagePath && !allImagesLoaded) && (
                <div className="carone-hero-images__image carone-hero-images__image--active">
                    <img
                        src={blurredImagePath.path}
                        alt={blurredImagePath.alt}
                        className={blurredImagePath.className ?? ''}
                        style={blurredImagePath.style}
                    />
                </div>
            )}
        </div>
    );
};

export default HeroSlider;
