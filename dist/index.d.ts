import React from 'react';
export declare type ImageType = {
    id: number;
    url: string;
};
declare type ReactFancyVitrineProps = {
    images?: ImageType[];
    containerWidth?: string | number;
    borderColorSelected?: string;
    buttonPosition?: string;
};
declare const ReactFancyVitrine: React.FC<ReactFancyVitrineProps>;
export default ReactFancyVitrine;
