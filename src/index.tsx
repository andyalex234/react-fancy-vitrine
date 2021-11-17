import React, { useEffect, useRef, useState } from 'react'
import ArrowButton from './components/ArrowButton'

import {
  Container,
  SelectedImage,
  Images,
  ImageSelected,
  Image,
  Carousel
} from './styles'

export type ImageType = {
  id: number;
  url: string;
}

type ReactFancyVitrineProps = {
  images?: ImageType[];
  containerWidth?: string | number;
  borderColorSelected?: string;
  buttonPosition?: string;
  buttonBgColor?: {
    default?: string;
    hover?: string;
  };
  className?: string;
}

const ReactFancyVitrine: React.FC<ReactFancyVitrineProps> = ({
  images,
  containerWidth,
  borderColorSelected,
  buttonPosition,
  buttonBgColor,
  className
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<ImageType>()
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([])

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

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx])
      setSelectedImageIndex(newIdx)

      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView(
          {
            inline: 'center',
            behavior: 'smooth'
          }
        )
      }
    }
  }

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1

      if (newIdx >= images.length) {
        newIdx = 0
      }

      handleSelectedImageChange(newIdx)
    }
  }

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1

      if (newIdx < 0) {
        newIdx = images.length - 1
      }

      handleSelectedImageChange(newIdx)
    }
  }

  return (
    <div style={{ ...Container, width: containerWidth }} className={className}>
      <div style={{
        ...SelectedImage,
        backgroundImage: `url(${selectedImage?.url})`
      }}
      />

      <div style={Carousel}>
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
                  onClick={() => handleSelectedImageChange(idx)}
                  style={imageStyle}
                  key={image.id}
                  ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
              )
            })}
        </div>
      </div>

      <ArrowButton
        buttonDirection='left'
        buttonBgColor={buttonBgColor}
        buttonPosition={buttonPosition}
        handleClick={handleLeftClick}
      />

      <ArrowButton
        buttonDirection='right'
        buttonBgColor={buttonBgColor}
        buttonPosition={buttonPosition}
        handleClick={handleRightClick}
      />
    </div>
  )
}

ReactFancyVitrine.defaultProps = {
  containerWidth: 600,
  borderColorSelected: '#732400',
  buttonPosition: 'bottom'
}

export default ReactFancyVitrine
