import React, { useState, useEffect, useMemo } from "react";
import "../../styles/Hero.css";

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

export interface HeroSliderVideoProps {
    /** The path to the video */
    path: string;
    /** The alt text for the video (used for accessibility) */
    alt?: string;
    /** A custom class name to apply to the video */
    className?: string;
    /** A custom style object to apply to the video */
    style?: React.CSSProperties;
    /** Whether the video should autoplay */
    autoplay?: boolean;
    /** Whether the video should loop */
    loop?: boolean;
    /** Whether the video should play muted */
    muted?: boolean;
}

/*
 * The props for the HeroSlider component
 */
export interface HeroSliderProps {
    /** The array of images to display in the slider. If there is only one image, it will be displayed without a slider */
    images?: HeroSliderImageProps[];
    /** The array of videos to display in the slider */
    videos?: HeroSliderVideoProps[];
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
    videos = [],
    interval = 7000,
    blurredImagePath,
}) => {
    const mediaItems = [...images, ...videos];
    const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));
    const [allMediaLoaded, setAllMediaLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (!allMediaLoaded || mediaItems.length <= 1) return;
        const effectiveInterval = Math.max(interval, 1000);
        const intervalObj = setInterval(() => {
            setActiveMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
        }, effectiveInterval);

        return () => {
            clearInterval(intervalObj);
        };
    }, [mediaItems.length, allMediaLoaded]);

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
                            setAllMediaLoaded(true);
                        }
                        return updated;
                    });
                };
            });

            if (videos.length > 0) {
                setAllMediaLoaded(true);
            }
        };

        loadImages();
    }, [images, videos]);

    return (
        <div className="carone-hero-media layered-grid">
            {images.map((image, index) => (
                <div
                    key={image.alt}
                    className={`carone-hero-media__image ${
                        index === activeMediaIndex ? "carone-hero-media__item--active" : ""
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
            {videos.map((video, index) => (
                <div
                    key={video.alt}
                    className={`carone-hero-media__video ${
                        index + images.length === activeMediaIndex ? "carone-hero-media__item--active" : ""
                    }`}
                >
                    <video
                        src={video.path}
                        className={video.className ?? ''}
                        style={video.style}
                        autoPlay={video.autoplay ?? true}
                        loop={video.loop ?? true}
                        muted={video.muted ?? true}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
            {(blurredImagePath && !allMediaLoaded) && (
                <div className="carone-hero-media__image carone-hero-media__item--active">
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
