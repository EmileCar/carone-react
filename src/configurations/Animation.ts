export interface AnimationProps {
    animation: Animation | string;
    duration?: number;
    delay?: number;
    timingFunction?: string;
    iterationCount?: number;
    direction?: string;
    fillMode?: string;
}

/*
 * Enum for transitions
 */
export enum Animation {
    Fade = 'carone-animation__fadeIn',
    Slide = 'slide',
    Scale = 'scale',
}

export const getFinalAnimationStyle = (animationProps: AnimationProps): string => {
    const {
        animation,
        duration = 1,
        delay = 0,
        timingFunction = 'ease',
        iterationCount = 1,
        direction = 'normal',
        fillMode = 'none',
    } = animationProps;

    return `${animation} ${duration}s ${timingFunction} ${delay}s ${iterationCount} ${direction} ${fillMode}`;
};