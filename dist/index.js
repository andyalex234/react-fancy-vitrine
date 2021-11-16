function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var ReactFancyVitrine = function ReactFancyVitrine(_ref) {
  var images = _ref.images;

  var _useState = React.useState(0),
      selectedImageIndex = _useState[0],
      setSelectedImageIndex = _useState[1];

  var _useState2 = React.useState(),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var carouselItemsRef = React.useRef([]);
  React.useEffect(function () {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  var handleSelectedImageChange = function handleSelectedImageChange(newIdx) {
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

  var handleRightClick = function handleRightClick() {
    if (images && images.length > 0) {
      var newIdx = selectedImageIndex + 1;

      if (newIdx >= images.length) {
        newIdx = 0;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  var handleLeftClick = function handleLeftClick() {
    if (images && images.length > 0) {
      var newIdx = selectedImageIndex - 1;

      if (newIdx < 0) {
        newIdx = images.length - 1;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  return React__default.createElement("div", {
    className: 'carousel-container'
  }, React__default.createElement("div", {
    className: 'selected-image',
    style: {
      backgroundImage: "url(" + (selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.url) + ")"
    }
  }), React__default.createElement("div", {
    className: 'carousel'
  }, React__default.createElement("div", {
    className: 'carousel__images'
  }, images && images.map(function (image, idx) {
    return React__default.createElement("div", {
      onClick: function onClick() {
        return handleSelectedImageChange(idx);
      },
      style: {
        backgroundImage: "url(" + image.url + ")"
      },
      key: image.id,
      className: "carousel__image " + (selectedImageIndex === idx && 'carousel__image-selected'),
      ref: function ref(el) {
        return carouselItemsRef.current[idx] = el;
      }
    });
  })), React__default.createElement("button", {
    className: 'carousel__button carousel__button-left',
    onClick: handleLeftClick
  }, "Prev"), React__default.createElement("button", {
    className: 'carousel__button carousel__button-right',
    onClick: handleRightClick
  }, "Next")));
};

module.exports = ReactFancyVitrine;
//# sourceMappingURL=index.js.map
