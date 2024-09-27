import React from 'react';
import { AnimationProps } from './Animation';
import { HoverEffectProps } from './hoverEffect';

interface SharedProps {
    className?: string;
    style?: React.CSSProperties;
    onLoadAnimation?: AnimationProps | AnimationProps[];
    hoverEffect?: HoverEffectProps | HoverEffectProps[];
}

export const withSharedProps = <T extends {},>(WrappedComponent: React.FC<T>) => {
    const ComponentWithSharedProps: React.FC<T & SharedProps> = (props) => {
        const { className, style, onLoadAnimation, hoverEffect, ...rest } = props;

        const finalStyle: React.CSSProperties = {
            ...style,
            ...(onLoadAnimation && {
                animation: Array.isArray(onLoadAnimation)
                    ? onLoadAnimation.map((animation) => `${animation.animation} ${animation.duration}s ${animation.timingFunction} ${animation.iterationCount} ${animation.direction} ${animation.fillMode}`)
                    : `${onLoadAnimation.animation} ${onLoadAnimation.duration}s ${onLoadAnimation.timingFunction} ${onLoadAnimation.iterationCount} ${onLoadAnimation.direction} ${onLoadAnimation.fillMode}`,
            }),
            ...(hoverEffect && {
                ':hover': {
                    filter: hoverEffect.hoverEffect,
                    transition: `filter ${hoverEffect.duration}s`,
                },
            }),
        };

        return (
            <div
                className={className}
                style={{
                    ...finalStyle,
                }}

            >
                <WrappedComponent {...(rest as T)} />
            </div>
        );
    };

    return ComponentWithSharedProps;
};
