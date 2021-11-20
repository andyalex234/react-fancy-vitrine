import React from 'react';
import { ImageType } from '../ThumbCarousel';
export declare type CarouselType = {
    images?: ImageType[];
    selectedImageIndex: number;
    borderColorSelected: string | undefined;
    carouselItemsRef: any;
    theme: string | undefined;
    handleSelectedImageChange: (newIdx: number) => void;
    setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<ImageType | undefined>>;
};
declare const Carousel: React.FC<CarouselType>;
export default Carousel;
export { ImageType };
