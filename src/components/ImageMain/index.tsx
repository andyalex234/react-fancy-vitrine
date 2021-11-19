import React, { useState, useRef } from 'react'
import { useRect } from '../../hooks/useRect'
import Lens from '../Lens'

import {
  ImageContainer,
  SelectedImage,
  ContainerHovered
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
}

const ImageMain: React.FC<ImageMainProps> = ({ selectedImage, transitionImage, effect }) => {
  const [lensShows, setLensShows] = useState(false)

  let defaultStyles = ImageContainer

  if (effect)
    defaultStyles = {
      ...defaultStyles,
      ...(transitionsAnimate[effect](transitionImage))
    }

  const renderLens = () => {
    setLensShows(!lensShows)
  }

  const elementLens = useRef<any>()
  const elementImageMain = useRef<any>()
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event

    // const offsetX = elementLens.current.offsetLeft
    // const offsetY = elementLens.current.offsetTop

    console.log(useRect(elementLens), elementImageMain.current.node.getBoundingClientRect())

    // console.log(offsetX, clientX)

    setMouseX(clientX)
    setMouseY(clientY)
  }

  return (
    <div
      ref={elementImageMain}
      style={defaultStyles}
      onMouseEnter={renderLens}
      onMouseLeave={renderLens}
      onMouseMove={handleMouseMove}
    >
      <div style={{
        ...ContainerHovered,
        opacity: lensShows ? 1 : 0
      }}
      />

      <Lens
        setRef={elementLens}
        mouseX={mouseX}
        mouseY={mouseY}
        image={selectedImage}
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
