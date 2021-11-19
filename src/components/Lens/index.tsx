import React, { useEffect, useState } from 'react'

import {
  ContainerLens
} from './styles'

type LensType = {
  image: string | undefined;
  mouseX: number;
  mouseY: number;
  setRef: any;
}

const Lens: React.FC<LensType> = ({ image, mouseX, mouseY, setRef }) => {
  const [elementRef, setElementRef] = useState(null)

  useEffect(() => {
    setElementRef(setRef)
  })

  return (
    <div
      ref={elementRef}
      style={{
        ...ContainerLens,
        backgroundImage: `url(${image})`,
        transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }}
    />
  )
}

export default Lens
