import React from 'react'

import {
  ContainerLens,
  ImageLens
} from './styles'

type LensType = {
  image: string | undefined;
  mouseX: number;
  mouseY: number;
  setRef: any;
  visible: boolean;
  imageMainSize: {
    width: number;
    height: number;
  };
}

const Lens: React.FC<LensType> = ({ image, mouseX, mouseY, setRef, imageMainSize, visible }) => {
  const lensSize = 250
  const approximation = 3

  return (
    <div
      ref={setRef}
      style={{
        ...ContainerLens,
        width: lensSize,
        height: lensSize,
        transform: `translate(${mouseX}px, ${mouseY}px)`,
        opacity: visible ? 1 : 0
      }}
    >

      <div style={{
        ...ImageLens,
        width: (imageMainSize.width * approximation),
        height: (imageMainSize.height * approximation),
        backgroundImage: `url(${image})`,
        transform: `translate(${-(mouseX * (approximation / 1.55))}px, ${-(mouseY * (approximation / 1.25))}px)`
      }}
      />
    </div>
  )
}

export default Lens
