import React from 'react';
import { ImageType } from './components/Carousel';
declare type ReactFancyVitrineProps = {
    images?: ImageType[];
    containerWidth?: string | number;
    borderColorSelected?: string;
    buttonPosition?: string;
    buttonBgColor?: {
        default?: string;
        hover?: string;
    };
    effect?: string;
    timingEffect?: number;
    className?: string;
};
declare const ReactFancyVitrine: React.FC<ReactFancyVitrineProps>;
export default ReactFancyVitrine;
export { ImageType };
