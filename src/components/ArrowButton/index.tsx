import React, { useState } from 'react'

import {
  Button,
  ButtonHover,
  ButtonLeft,
  ButtonRight
} from './styles'

const definePositionButton = (buttonPosition: string | undefined, buttonDirection: string | undefined, ButtonDirectionSide: React.CSSProperties) => {
  const positions = [
    'default',
    'default-outer',
    'center',
    'center-outer'
  ]

  if (buttonPosition !== undefined && !positions.includes(buttonPosition))
    return

  if (buttonDirection && (buttonPosition === 'default-outer' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide[buttonDirection] = 15
  } else if (buttonDirection) {
    ButtonDirectionSide[buttonDirection] = 110
  }

  if (buttonDirection && (buttonPosition === 'center' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide.top = '40%'
  } else {
    ButtonDirectionSide.top = '88%'
  }
}

export type ArrowButtonType = {
  buttonDirection: string | undefined;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonPosition: string | undefined;
  buttonBgColor?: {
    default?: string;
    hover?: string;
  };
}

/**
 *
 * @param handleClick: Click event
 * @param buttonDirection: left | right
 * @param buttonPosition: default | default-outer | center | center-outer
 * @param buttonBgColor: default: backgroundColor | backgroundColor when hover
 * @returns Component
 */
const ArrowButton: React.FC<ArrowButtonType> = ({ handleClick, buttonDirection, buttonPosition, buttonBgColor }) => {
  const [hoverButton, setHoverButton] = useState<boolean>(false)
  const ButtonDirectionSide = (buttonDirection === 'left' ? ButtonLeft : ButtonRight)

  definePositionButton(buttonPosition, buttonDirection, ButtonDirectionSide)

  let styleButtons = {
    ...Button,
    ...ButtonDirectionSide
  }

  if (buttonBgColor && buttonBgColor.default)
    styleButtons.backgroundColor = buttonBgColor.default

  if (hoverButton) {
    if (buttonBgColor && buttonBgColor.hover)
      ButtonHover.backgroundColor = buttonBgColor.hover

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

ArrowButton.defaultProps = {
  buttonDirection: 'left'
}

export default ArrowButton
