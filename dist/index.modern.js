import React, { useState, createRef, useEffect, useRef } from 'react';

var arrowLeft = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMzAuOCw0NS43IDkuMSwyNCAzMC44LDIuMyAzMi4yLDMuNyAxMS45LDI0IDMyLjIsNDQuMyAgIi8+PC9nPjwvc3ZnPg==';

var arrowRight = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTEuOCw0NS43IDEwLjQsNDQuMyAzMC44LDI0IDEwLjQsMy43IDExLjgsMi4zIDMzLjUsMjQgICIvPjwvZz48L3N2Zz4=';

const Button = {
  position: 'absolute',
  top: '85%',
  fontSize: 0,
  letterSpacing: -5000,
  background: 'center no-repeat',
  backgroundColor: '#f1f1f1',
  backgroundSize: 20,
  width: 40,
  height: 40,
  padding: 10,
  boxShadow: '0px 1px 5px #000',
  borderRadius: '50%',
  border: 0,
  display: 'block',
  cursor: 'pointer',
  transition: 'all .3s ease'
};
const ButtonHover = {
  backgroundColor: '#ddd'
};
const ButtonLeft = {
  left: 10,
  backgroundImage: `url(${arrowLeft})`
};
const ButtonRight = {
  right: 10,
  backgroundImage: `url(${arrowRight})`
};

const definePositionButton = (buttonPosition, buttonDirection, ButtonDirectionSide) => {
  const positions = ['default', 'default-outer', 'center', 'center-outer'];
  if (buttonPosition !== undefined && !positions.includes(buttonPosition)) return;

  if (buttonDirection && (buttonPosition === 'default-outer' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide[buttonDirection] -= 25;
  }

  if (buttonDirection && (buttonPosition === 'center' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide.top = '40%';
  }
};

const ArrowButton = ({
  handleClick,
  buttonDirection,
  buttonPosition,
  buttonBgColor
}) => {
  const [hoverButton, setHoverButton] = useState(false);
  const ButtonDirectionSide = buttonDirection === 'left' ? ButtonLeft : ButtonRight;
  definePositionButton(buttonPosition, buttonDirection, ButtonDirectionSide);
  let styleButtons = { ...Button,
    ...ButtonDirectionSide
  };
  if (buttonBgColor && buttonBgColor.default) styleButtons.backgroundColor = buttonBgColor.default;

  if (hoverButton) {
    if (buttonBgColor && buttonBgColor.hover) ButtonHover.backgroundColor = buttonBgColor.hover;
    styleButtons = { ...styleButtons,
      ...ButtonHover
    };
  }

  const handleHoverButton = () => {
    setHoverButton(!hoverButton);
  };

  return React.createElement("button", {
    style: styleButtons,
    onMouseEnter: handleHoverButton,
    onMouseOut: handleHoverButton,
    onClick: handleClick
  });
};

ArrowButton.defaultProps = {
  buttonDirection: 'left'
};

const ContainerLens = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 99,
  transition: 'opacity .2s ease',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '1px solid #000'
};
const ImageLens = {
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  boxSizing: 'border-box'
};

const Lens = ({
  image,
  mouseX,
  mouseY,
  setRef,
  imageMainSize,
  visible
}) => {
  const lensSize = 150;
  const approximation = 3;
  return React.createElement("div", {
    ref: setRef,
    style: { ...ContainerLens,
      width: lensSize,
      height: lensSize,
      transform: `translate(${mouseX}px, ${mouseY}px)`,
      opacity: visible ? 1 : 0
    }
  }, React.createElement("div", {
    style: { ...ImageLens,
      width: imageMainSize.width * approximation,
      height: imageMainSize.height * approximation,
      backgroundImage: `url(${image})`,
      transform: `translate(${-(mouseX * (approximation / 1.55))}px, ${-(mouseY * (approximation / 1.25))}px)`
    }
  }));
};

const ImageContainer = {
  transition: 'all .5s ease',
  position: 'relative',
  height: 500,
  marginBottom: 5
};
const ContainerHovered = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  transition: 'opacity .5s ease',
  zIndex: 89
};
const SelectedImage = {
  width: '100%',
  height: 500,
  marginBottom: 8,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const transitionsAnimate = {
  default: () => ({}),
  fade: transitionImage => {
    if (transitionImage) return {
      opacity: 0
    };
    return {
      opacity: 1
    };
  }
};

const ImageMain = ({
  selectedImage,
  transitionImage,
  effect
}) => {
  const [lensShows, setLensShows] = useState(false);
  let defaultStyles = ImageContainer;
  if (effect) defaultStyles = { ...defaultStyles,
    ...transitionsAnimate[effect](transitionImage)
  };
  const elementImageMain = createRef();
  const elementLens = createRef();
  const [imageMainSize, setImageMainSize] = useState({
    width: 0,
    height: 0
  });
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  useEffect(() => {
    setImageMainSize({
      width: elementImageMain.current.offsetWidth,
      height: elementImageMain.current.offsetHeight
    });
  }, []);

  const handleMouseMove = event => {
    const {
      clientX,
      clientY
    } = event;
    const {
      left,
      top
    } = elementImageMain.current.getBoundingClientRect();
    const xValue = clientX - left - elementLens.current.offsetWidth / 3;
    const yValue = clientY - top - elementLens.current.offsetHeight / 3;
    const lensAreaCondition = xValue > -(elementLens.current.offsetWidth / 10) && xValue < imageMainSize.width - elementLens.current.offsetWidth / 2 && yValue > -(elementLens.current.offsetHeight / 10) && yValue < imageMainSize.height - elementLens.current.offsetHeight / 2;
    if (lensAreaCondition) setLensShows(true);else setLensShows(false);
    setMouseX(xValue);
    setMouseY(yValue);
  };

  return React.createElement("div", {
    ref: elementImageMain,
    style: { ...defaultStyles,
      zIndex: lensShows ? 999 : 99
    },
    onMouseMove: handleMouseMove
  }, React.createElement("div", {
    style: { ...ContainerHovered,
      opacity: lensShows ? 1 : 0
    }
  }), React.createElement(Lens, {
    visible: lensShows,
    setRef: elementLens,
    mouseX: mouseX,
    mouseY: mouseY,
    image: selectedImage,
    imageMainSize: imageMainSize
  }), React.createElement("div", {
    style: { ...SelectedImage,
      backgroundImage: `url(${selectedImage})`
    }
  }));
};

const CarouselContainer = {
  position: 'relative',
  zIndex: 100
};
const Images = {
  display: 'flex',
  maxWidth: '100%',
  overflowX: 'hidden'
};
const borderSize = 3;
const ImageSelected = {
  border: `${borderSize}px solid`
};
const Image = {
  marginRight: 10,
  height: 150,
  minWidth: 150,
  border: `${borderSize}px solid #ffa70000`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const Carousel = ({
  images,
  selectedImageIndex,
  borderColorSelected,
  carouselItemsRef,
  handleSelectedImageChange,
  setSelectedImageIndex,
  setSelectedImage
}) => {
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleClickImage = idx => {
    handleSelectedImageChange(idx);
  };

  return React.createElement("div", {
    style: CarouselContainer
  }, React.createElement("div", {
    style: Images
  }, images && images.map((image, idx) => {
    let imageStyle = { ...Image,
      backgroundImage: `url(${image.url})`
    };

    if (selectedImageIndex === idx) {
      imageStyle = { ...imageStyle,
        ...ImageSelected,
        borderColor: borderColorSelected
      };
    }

    if (images.length - 1 === idx) {
      imageStyle = { ...imageStyle,
        marginRight: 0
      };
    }

    return React.createElement("div", {
      onClick: () => handleClickImage(idx),
      style: imageStyle,
      key: image.id && idx,
      ref: el => carouselItemsRef.current[idx] = el
    });
  })));
};

const Container = {
  margin: '-60px 0 20px',
  position: 'relative',
  overflow: 'hidden',
  padding: '80px 80px 0'
};

const ReactFancyVitrine = ({
  images,
  containerWidth,
  borderColorSelected,
  buttonPosition,
  buttonBgColor,
  className,
  effect,
  timingEffect
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const [transitionImage, setTransitionImage] = useState(false);
  const carouselItemsRef = useRef([]);

  const executeTransation = newIdx => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);

      if (carouselItemsRef !== null && carouselItemsRef !== void 0 && carouselItemsRef.current[newIdx]) {
        var _carouselItemsRef$cur;

        carouselItemsRef === null || carouselItemsRef === void 0 ? void 0 : (_carouselItemsRef$cur = carouselItemsRef.current[newIdx]) === null || _carouselItemsRef$cur === void 0 ? void 0 : _carouselItemsRef$cur.scrollIntoView({
          inline: 'center',
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSelectedImageChange = newIdx => {
    if (effect !== 'default') {
      setTransitionImage(true);
      setTimeout(() => {
        executeTransation(newIdx);
        setTransitionImage(false);
      }, timingEffect);
    } else {
      executeTransation(newIdx);
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;

      if (newIdx >= images.length) {
        newIdx = 0;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;

      if (newIdx < 0) {
        newIdx = images.length - 1;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  return React.createElement("div", {
    style: { ...Container,
      width: containerWidth
    },
    className: className
  }, React.createElement(ImageMain, {
    effect: effect,
    transitionImage: transitionImage,
    selectedImage: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.url
  }), React.createElement(Carousel, {
    images: images,
    selectedImageIndex: selectedImageIndex,
    borderColorSelected: borderColorSelected,
    handleSelectedImageChange: handleSelectedImageChange,
    carouselItemsRef: carouselItemsRef,
    setSelectedImage: setSelectedImage,
    setSelectedImageIndex: setSelectedImageIndex
  }), React.createElement(ArrowButton, {
    buttonDirection: 'left',
    buttonBgColor: buttonBgColor,
    buttonPosition: buttonPosition,
    handleClick: handleLeftClick
  }), React.createElement(ArrowButton, {
    buttonDirection: 'right',
    buttonBgColor: buttonBgColor,
    buttonPosition: buttonPosition,
    handleClick: handleRightClick
  }));
};

ReactFancyVitrine.defaultProps = {
  containerWidth: 600,
  borderColorSelected: '#732400',
  buttonPosition: 'bottom',
  timingEffect: 300,
  effect: 'default'
};

export default ReactFancyVitrine;
//# sourceMappingURL=index.modern.js.map
