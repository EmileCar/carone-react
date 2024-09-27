export interface HoverEffectProps {
    hoverEffect?: HoverEffect;
    duration?: number;
}

/**
 * Enum for hover effect
 */
export enum HoverEffect {
    Darken = 'carone-hovereffect__darken',
    Lighten = 'carone-hovereffect__lighten',
    Grow = 'carone-hovereffect__grow'
}