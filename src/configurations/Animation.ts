export interface AnimationProps {
    animation: Animation;
    duration?: number;
    delay?: number;
    timingFunction?: string;
    iterationCount?: number;
    direction?: string;
    fillMode?: string;
}

export const defaultAnimationProps: AnimationProps = {
    animation: Animation.Fade,
    duration: 300,
    delay: 0,
    timingFunction: 'ease',
    iterationCount: 1,
    direction: 'normal',
    fillMode: 'both',
};

/*
 * Enum for transitions
 */
export enum Animation {
    Fade = 'carone-animation__fadeIn',
    Slide = 'slide',
    Scale = 'scale',
}