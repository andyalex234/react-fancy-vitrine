import React, { useState } from 'react'

import {
  Thumb,
  ImageSelected,
  ThumbFancy
} from './styles'

export type ImageType = {
  id?: number;
  url: string;
}

type ThumbCarouselType = {
  selectedImageIndex: number;
  borderColorSelected: string | undefined;
  image: ImageType;
  idx: number;
  imagesAmount: number;
  carouselItemsRef: any;
  theme: string | undefined;
  handleSelectedImageChange: (newIdx: number) => void;
}

const ThumbCarousel: React.FC<ThumbCarouselType> = ({
  selectedImageIndex,
  borderColorSelected,
  image,
  idx,
  imagesAmount,
  carouselItemsRef,
  theme,
  handleSelectedImageChange
}) => {
  const [thumbHovered, setThumbHovered] = useState(false)

  const handleClickImage = (idx: number) => {
    handleSelectedImageChange(idx)
  }

  const handleHover = () => {
    setThumbHovered(!thumbHovered)
  }

  let imageStyle: React.CSSProperties = {
    ...Thumb,
    backgroundImage: `url(${image.url})`
  }

  if (selectedImageIndex === idx) {
    imageStyle = {
      ...imageStyle,
      ...ImageSelected,
      borderColor: borderColorSelected,
      backgroundSize: '100%'
    }
  } else {
    imageStyle = {
      ...imageStyle,
      backgroundSize: thumbHovered ? '105%' : '100%'
    }
  }

  if ((imagesAmount - 1) === idx) {
    imageStyle = {
      ...imageStyle,
      marginRight: 0
    }
  }

  if (theme === 'fancy') {
    imageStyle = {
      ...imageStyle,
      ...ThumbFancy
    }
  }

  return (
    <div
      onClick={() => handleClickImage(idx)}
      style={{
        ...imageStyle
      }}
      ref={(el) => { carouselItemsRef.current[idx] = el }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    />
  )
}

export default ThumbCarousel
