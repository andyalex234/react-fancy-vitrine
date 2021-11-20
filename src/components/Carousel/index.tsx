import React, { useEffect } from 'react'

import ThumbCarousel, { ImageType } from '../ThumbCarousel'

import {
  CarouselContainer,
  Images
} from './styles'

export type CarouselType = {
  images?: ImageType[];
  selectedImageIndex: number;
  borderColorSelected: string | undefined;
  carouselItemsRef: any;
  theme: string | undefined;
  handleSelectedImageChange: (newIdx: number) => void;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageType | undefined>>;
}

const Carousel: React.FC<CarouselType> = ({
  images,
  carouselItemsRef,
  handleSelectedImageChange,
  setSelectedImageIndex,
  setSelectedImage,
  selectedImageIndex,
  borderColorSelected,
  theme
}) => {
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      )

      setSelectedImageIndex(0)
      setSelectedImage(images[0])
    }
  }, [images])

  return (
    <div style={CarouselContainer}>
      <div style={Images}>
        {images &&
          images.map((image, idx) => (
            <ThumbCarousel
              theme={theme}
              borderColorSelected={borderColorSelected}
              selectedImageIndex={selectedImageIndex}
              carouselItemsRef={carouselItemsRef}
              handleSelectedImageChange={handleSelectedImageChange}
              idx={idx}
              image={image}
              imagesAmount={images.length}
              key={image.id && idx}
            />
          ))}
      </div>
    </div>
  )
}

export default Carousel
export { ImageType }
