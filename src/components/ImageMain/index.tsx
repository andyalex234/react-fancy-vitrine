import React from 'react'

import {
  ImageContainer,
  SelectedImage
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
  let defaultStyles = {
    ...ImageContainer
  }

  if (effect)
    defaultStyles = {
      ...defaultStyles,
      ...(transitionsAnimate[effect](transitionImage))
    }

  return (
    <div style={defaultStyles}>
      <div style={{
        ...SelectedImage,
        backgroundImage: `url(${selectedImage})`
      }}
      />
    </div>
  )
}

export default ImageMain
