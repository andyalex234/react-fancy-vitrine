import React from 'react';
export declare type ImageType = {
    id?: number;
    url: string;
};
declare type ThumbCarouselType = {
    selectedImageIndex: number;
    borderColorSelected: string | undefined;
    image: ImageType;
    idx: number;
    imagesAmount: number;
    carouselItemsRef: any;
    theme: string | undefined;
    handleSelectedImageChange: (newIdx: number) => void;
};
declare const ThumbCarousel: React.FC<ThumbCarouselType>;
export default ThumbCarousel;
