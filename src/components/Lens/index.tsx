import React from 'react'

import {
  ContainerLens
} from './styles'

type LensType = {
  image: string;
}

const Lens: React.FC<LensType> = ({ image }) => {
  return (
    <div
      style={{
        ...ContainerLens,
        backgroundImage: `url${image}`
      }}
    />
  )
}

export default Lens
