import React, { useState, useRef } from "react";
import ArrowButton from "./components/ArrowButton";
import ImageMain from "./components/ImageMain";
import Carousel, { ImageType } from "./components/Carousel";

import { Container } from "./styles";

export type ReactFancyVitrineType = {
  images?: ImageType[];
  containerWidth?: string | number;
  borderColorSelected?: string;
  buttonPosition?: string;
  buttonBgColor?: {
    default?: string;
    hover?: string;
  };
  effect?: string;
  timingEffect?: string | number;
  hasButtons?: boolean;
  className?: string;
  theme?: string;
  layout?: string | "vertical";
};

const ReactFancyVitrine: React.FC<ReactFancyVitrineType> = ({
  images,
  containerWidth,
  borderColorSelected,
  buttonPosition,
  buttonBgColor,
  className,
  effect,
  timingEffect,
  hasButtons,
  theme,
  layout,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const [transitionImage, setTransitionImage] = useState(false);
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const executeTransation = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);

      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handleSelectedImageChange = (newIdx: number) => {
    if (effect !== "default") {
      setTransitionImage(true);

      if (timingEffect)
        setTimeout(() => {
          executeTransation(newIdx);
          setTransitionImage(false);
        }, parseInt(timingEffect?.toString(), 10));
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
  const flexdirection = layout === 'horizontal' ? 'row' : 'column'

  return (
    <div
      style={{
        ...Container,
        width: containerWidth,
      }}
      className={className}
    >
      <ImageMain
        theme={theme}
        effect={effect}
        transitionImage={transitionImage}
        selectedImage={selectedImage?.url}
      />
      <Carousel
        layout={layout??'vertical'}
        theme={theme}
        images={images}
        selectedImageIndex={selectedImageIndex}
        borderColorSelected={borderColorSelected}
        handleSelectedImageChange={handleSelectedImageChange}
        carouselItemsRef={carouselItemsRef}
        setSelectedImage={setSelectedImage}
        setSelectedImageIndex={setSelectedImageIndex}
      />

      {hasButtons && (
        <ArrowButton
          buttonDirection={layout ==="vertical" ? "top" : "left"}
          buttonBgColor={buttonBgColor}
          buttonPosition={buttonPosition}
          handleClick={handleLeftClick}
        />
      )}

      {hasButtons && (
        <ArrowButton
          buttonDirection={layout ==="vertical" ? "bottom" : "right"}
          buttonBgColor={buttonBgColor}
          buttonPosition={buttonPosition}
          handleClick={handleRightClick}
        />
      )}
    </div>
  );
};

ReactFancyVitrine.defaultProps = {
  containerWidth: 600,
  borderColorSelected: "#732400",
  buttonPosition: "bottom",
  timingEffect: 300,
  effect: "default",
  hasButtons: true,
  theme: "default",
};

export default ReactFancyVitrine;
export { ImageType };
