import React, { useState, useRef } from 'react'
import ArrowButton from './components/ArrowButton'
import ImageMain from './components/ImageMain'
import Carousel, { ImageType } from './components/Carousel'

import {
  Container
} from './styles'

type ReactFancyVitrineProps = {
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
}

const ReactFancyVitrine: React.FC<ReactFancyVitrineProps> = ({
  images,
  containerWidth,
  borderColorSelected,
  buttonPosition,
  buttonBgColor,
  className,
  effect,
  timingEffect
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<ImageType>()
  const [transitionImage, setTransitionImage] = useState(false)
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([])

  const executeTransation = (newIdx: number) => {
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

  const handleSelectedImageChange = (newIdx: number) => {
    if (effect !== 'default') {
      setTransitionImage(true)

      setTimeout(() => {
        executeTransation(newIdx)
        setTransitionImage(false)
      }, timingEffect)
    } else {
      executeTransation(newIdx)
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
      <ImageMain
        effect={effect}
        transitionImage={transitionImage}
        selectedImage={selectedImage?.url}
      />

      <Carousel
        images={images}
        selectedImageIndex={selectedImageIndex}
        borderColorSelected={borderColorSelected}
        handleSelectedImageChange={handleSelectedImageChange}
        carouselItemsRef={carouselItemsRef}
        setSelectedImage={setSelectedImage}
        setSelectedImageIndex={setSelectedImageIndex}
      />

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
  buttonPosition: 'bottom',
  timingEffect: 300,
  effect: 'default'
}

export default ReactFancyVitrine
export { ImageType }
