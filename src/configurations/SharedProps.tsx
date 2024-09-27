import React from 'react';
import { AnimationProps, getFinalAnimationStyle } from './Animation';
import { HoverEffectMetadataMap, HoverEffectProps } from './HoverEffect';
import { classNames } from '../utils/classNameUtil';

export interface SharedProps {
    className?: string;
    style?: React.CSSProperties;
    /** If the element should have one or more animations. Can be a single animation, an array of animations, or a custom string (your classname of the animation). You can use the `Animation` enum to get the available animations. */
    onLoadAnimation?: AnimationProps | AnimationProps[];
    /** If the element should have one or more hover effects. Can be a single effect, an array of effects, or a custom string (your classname of the effect). You can use the `HoverEffect` enum to get the available effects. */
    hoverEffect?: HoverEffectProps | HoverEffectProps[];
}

export const withSharedProps = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const ComponentWithSharedProps: React.FC<P & SharedProps> = (props) => {
        const { className, style, onLoadAnimation, hoverEffect, ...rest } = props as P & SharedProps;

        const finalStyle: React.CSSProperties = {
            ...style,
            ...(onLoadAnimation && {
                animation: Array.isArray(onLoadAnimation)
                    ? onLoadAnimation.map(getFinalAnimationStyle).join(', ')
                    : getFinalAnimationStyle(onLoadAnimation),
            }),
        };

        let transitionStyle: React.CSSProperties = {};
        if (hoverEffect) {
            const hoverEffectsArray = Array.isArray(hoverEffect) ? hoverEffect : [hoverEffect];

            hoverEffectsArray.forEach((effectProps) => {
                const { hoverEffect, duration = 0.3, timingFunction = 'ease', delay = 0 } = effectProps;
                const effectMetadata = HoverEffectMetadataMap[hoverEffect];

                if (effectMetadata) {
                    const transitionProperty = effectMetadata.cssProperty;
                    const transitionDuration = duration || effectMetadata.defaultDuration || 0.3;
                    const transitionTimingFunction = timingFunction || effectMetadata.defaultTimingFunction || 'ease';

                    (transitionStyle as any)[transitionProperty] = `${transitionDuration}s ${transitionTimingFunction} ${delay}s`;
                }
            });
        }

        const hoverEffectClass = hoverEffect
        ? Array.isArray(hoverEffect)
            ? hoverEffect.map(({ hoverEffect }) => hoverEffect).join(' ')
            : hoverEffect.hoverEffect
        : '';

        return (
            <div
                className={classNames(className, hoverEffectClass)}
                style={{
                    ...finalStyle,
                }}

            >
                <WrappedComponent {...(rest as P)} />
            </div>
        );
    };

    return ComponentWithSharedProps;
};
