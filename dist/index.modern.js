import React, { useState, useRef, useEffect } from 'react';

const ReactFancyVitrine = ({
  images
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = newIdx => {
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
    className: 'carousel-container'
  }, React.createElement("div", {
    className: 'selected-image',
    style: {
      backgroundImage: `url(${selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.url})`
    }
  }), React.createElement("div", {
    className: 'carousel'
  }, React.createElement("div", {
    className: 'carousel__images'
  }, images && images.map((image, idx) => React.createElement("div", {
    onClick: () => handleSelectedImageChange(idx),
    style: {
      backgroundImage: `url(${image.url})`
    },
    key: image.id,
    className: `carousel__image ${selectedImageIndex === idx && 'carousel__image-selected'}`,
    ref: el => carouselItemsRef.current[idx] = el
  }))), React.createElement("button", {
    className: 'carousel__button carousel__button-left',
    onClick: handleLeftClick
  }, "Prev"), React.createElement("button", {
    className: 'carousel__button carousel__button-right',
    onClick: handleRightClick
  }, "Next")));
};

export default ReactFancyVitrine;
//# sourceMappingURL=index.modern.js.map
