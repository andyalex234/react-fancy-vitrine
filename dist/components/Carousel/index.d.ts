import React from 'react';
export declare type ImageType = {
    id?: number;
    url: string;
};
export declare type CarouselType = {
    images?: ImageType[];
    selectedImageIndex: number;
    borderColorSelected: string | undefined;
    carouselItemsRef: {
        current: HTMLDivElement[] | null[];
    };
    handleSelectedImageChange: (newIdx: number) => void;
    setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<ImageType | undefined>>;
};
declare const Carousel: React.FC<CarouselType>;
export default Carousel;
