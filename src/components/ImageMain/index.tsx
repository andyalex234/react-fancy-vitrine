import React, { useState, useEffect, createRef } from 'react'
import Lens from '../Lens'

import {
  ImageContainer,
  SelectedImage,
  ContainerHovered,
  ImageContainerFancy
} from './styles'

const transitionsAnimate = {
  default: () => ({}),
  fade: (transitionImage: boolean) => {
    if (transitionImage)
      return {
        opacity: 0
      }

    return {
      opacity: 1
    }
  }
}

type ImageMainProps = {
  selectedImage: string | undefined;
  transitionImage: boolean;
  effect?: string;
  theme: string | undefined;
}

const ImageMain: React.FC<ImageMainProps> = ({
  selectedImage,
  transitionImage,
  effect,
  theme
}) => {
  const [lensShows, setLensShows] = useState(false)

  let defaultStyles = ImageContainer

  if (effect)
    defaultStyles = {
      ...defaultStyles,
      ...(transitionsAnimate[effect](transitionImage))
    }

  if (theme === 'fancy')
    defaultStyles = {
      ...defaultStyles,
      ...ImageContainerFancy
    }

  const elementImageMain = createRef<any>()
  const elementLens = createRef<any>()
  const [imageMainSize, setImageMainSize] = useState({
    width: 0,
    height: 0
  })
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    setImageMainSize({
      width: elementImageMain.current.offsetWidth,
      height: elementImageMain.current.offsetHeight
    })
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event
    const { left, top } = elementImageMain.current.getBoundingClientRect()

    const xValue = (clientX - left) - (elementLens.current.offsetWidth / 3)
    const yValue = (clientY - top) - (elementLens.current.offsetHeight / 3)

    const lensAreaCondition = xValue > -(elementLens.current.offsetWidth / 10) &&
      xValue < (imageMainSize.width - (elementLens.current.offsetWidth / 2)) &&
      yValue > -(elementLens.current.offsetHeight / 10) &&
      yValue < (imageMainSize.height - (elementLens.current.offsetHeight / 2))

    if (lensAreaCondition) setLensShows(true)
    else setLensShows(false)

    setMouseX(xValue)
    setMouseY(yValue)
  }

  return (
    <div
      ref={elementImageMain}
      style={{
        ...defaultStyles,
        zIndex: lensShows ? 999 : 99
      }}
      onMouseMove={handleMouseMove}
    >
      <div style={{
        ...ContainerHovered,
        opacity: lensShows ? 1 : 0
      }}
      />

      <Lens
        visible={lensShows}
        setRef={elementLens}
        mouseX={mouseX}
        mouseY={mouseY}
        image={selectedImage}
        imageMainSize={imageMainSize}
      />

      <div style={{
        ...SelectedImage,
        backgroundImage: `url(${selectedImage})`
      }}
      />
    </div>
  )
}

export default ImageMain
