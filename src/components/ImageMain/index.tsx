import React from 'react'

import {
  ImageContainer,
  SelectedImage
} from './styles'

type ImageMainProps = {
  selectedImage: string | undefined;
}

const ImageMain: React.FC<ImageMainProps> = ({ selectedImage }) => {
  return (
    <div style={ImageContainer}>
      <div style={{
        ...SelectedImage,
        backgroundImage: `url(${selectedImage})`
      }}
      />
    </div>
  )
}

export default ImageMain
