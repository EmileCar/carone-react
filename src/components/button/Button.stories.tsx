// src/components/button/Button.stories.tsx
import React from 'react';
import Button from './Button';
import { HoverEffect } from '../../utils/hoverEffect';

export default {
    title: 'Button',
    component: Button as React.FC,
};

export const SimpleButton = () => <Button text="Click me" onClick={() => alert('Clicked!')} />;
export const DisabledButton = () => <Button text="Disabled" onClick={() => {}} disabled />;
export const FullWidthButton = () => <Button text="Full width" onClick={() => {}} fullWidth uppercase />;
export const LoadingButton = () => <Button text="Loading" onClick={() => {}} pending={true} />;
export const HoverEffectButton = () => <Button text="I hover" onClick={() => {}} hoverEffect={HoverEffect.Grow} />;