import React, { useState } from 'react'

import {
  Button,
  ButtonHover,
  ButtonLeft,
  ButtonRight
} from './styles'

type ArrowButtonProps = {
  buttonDirection: string | undefined;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonPosition: string | undefined;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ handleClick, buttonDirection, buttonPosition }) => {
  const [hoverButton, setHoverButton] = useState<boolean>(false)
  const ButtonDirectionSide = (buttonDirection === 'left' ? ButtonLeft : ButtonRight)

  if (buttonPosition && buttonDirection !== 'default') {
    ButtonDirectionSide[buttonPosition] -= 40
  }

  let styleButtons = {
    ...Button,
    ...ButtonDirectionSide
  }

  if (hoverButton) {
    styleButtons = {
      ...styleButtons,
      ...ButtonHover
    }
  }

  const handleHoverButton = () => {
    setHoverButton(!hoverButton)
  }

  return (
    <button
      style={styleButtons}
      onMouseEnter={handleHoverButton}
      onMouseOut={handleHoverButton}
      onClick={handleClick}
    />
  )
}

export default ArrowButton
