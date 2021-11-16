import React, { useEffect, useRef, useState } from 'react'

import {
  ButtonDirection,
  Carousel,
  Container,
  ImageMain
} from './styles'

export type ImageType = {
  id: number,
  url: string
}

const ReactFancyVitrine: React.FC<{ images?: ImageType[] }> = ({ images }: any) => {
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
    <Container>
      <ImageMain backgroundImage={selectedImage?.url} />

      <Carousel>
        <div className='images'>
          {images &&
            images.map((image: any, idx: any) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className={`image ${selectedImageIndex === idx && 'image-selected'}`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>

        <ButtonDirection
          className='button-left'
          onClick={handleLeftClick}
        >
          Prev
        </ButtonDirection>

        <ButtonDirection
          className='button-right'
          onClick={handleRightClick}
        >
          Next
        </ButtonDirection>
      </Carousel>
    </Container>
  )
}

export default ReactFancyVitrine
