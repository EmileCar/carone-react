export interface HoverEffectProps {
    hoverEffect: HoverEffect | string;
    duration?: number;
    timingFunction?: string;
    delay?: number;
}

/**
 * Enum for hover effect
 */
export enum HoverEffect {
    Darken = 'carone-hovereffect__darken',
    Lighten = 'carone-hovereffect__lighten',
    Grow = 'carone-hovereffect__grow'
}

interface HoverEffectTransitionData {
    cssProperty: string; // The CSS property that the hover effect affects (e.g., transform, filter)
    defaultDuration?: number; // Optional: Default duration for the effect
    defaultTimingFunction?: string; // Optional: Default timing function for the effect
}

export const HoverEffectMetadataMap: Record<HoverEffect | string, HoverEffectTransitionData> = {
    [HoverEffect.Grow]: {
        cssProperty: 'transform',
        defaultDuration: 0.3,
        defaultTimingFunction: 'ease',
    },
    [HoverEffect.Lighten]: {
        cssProperty: 'filter',
        defaultDuration: 0.3,
        defaultTimingFunction: 'ease',
    },
    [HoverEffect.Darken]: {
        cssProperty: 'filter',
        defaultDuration: 0.3,
        defaultTimingFunction: 'ease',
    },
};