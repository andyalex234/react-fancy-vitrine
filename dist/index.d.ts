import React from 'react';
import { ImageType } from './components/Carousel';
export declare type ReactFancyVitrineType = {
    images?: ImageType[];
    containerWidth?: string | number;
    borderColorSelected?: string;
    buttonPosition?: string;
    buttonBgColor?: {
        default?: string;
        hover?: string;
    };
    effect?: string;
    timingEffect?: string | number;
    hasButtons?: boolean;
    className?: string;
    theme?: string;
};
declare const ReactFancyVitrine: React.FC<ReactFancyVitrineType>;
export default ReactFancyVitrine;
export { ImageType };
