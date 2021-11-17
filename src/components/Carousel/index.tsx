import React, { useEffect } from 'react'

import {
  CarouselContainer,
  Images,
  Image,
  ImageSelected
} from './styles'

export type ImageType = {
  id: number;
  url: string;
}

export type CarouselType = {
  images?: ImageType[];
  selectedImageIndex: number;
  borderColorSelected: string | undefined;
  carouselItemsRef: {
    current: HTMLDivElement[] | null[];
  };
  handleSelectedImageChange: (newIdx: number) => void;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageType | undefined>>;
}

const Carousel: React.FC<CarouselType> = ({
  images,
  selectedImageIndex,
  borderColorSelected,
  carouselItemsRef,
  handleSelectedImageChange,
  setSelectedImageIndex,
  setSelectedImage
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

  const handleClickImage = (idx: number) => {
    handleSelectedImageChange(idx)
  }

  return (
    <div style={CarouselContainer}>
      <div style={Images}>
        {images &&
          images.map((image, idx) => {
            let imageStyle: React.CSSProperties = {
              ...Image,
              backgroundImage: `url(${image.url})`
            }

            if (selectedImageIndex === idx) {
              imageStyle = {
                ...imageStyle,
                ...ImageSelected,
                borderColor: borderColorSelected
              }
            }

            if ((images.length - 1) === idx) {
              imageStyle = {
                ...imageStyle,
                marginRight: 0
              }
            }

            return (
              <div
                onClick={() => handleClickImage(idx)}
                style={imageStyle}
                key={image.id}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Carousel
