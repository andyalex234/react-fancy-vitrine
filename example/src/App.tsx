import React, { useEffect, useState } from "react"
import ReactFancyVitrine, { ImageType } from "react-fancy-vitrine";
import "./index.css";

export default function App() {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);

  return (
    <div className='App'>
      <h1 className="header-presentation">
        React Fancy Vitrine
      </h1>

      <ReactFancyVitrine
        images={images}
        containerWidth={600}
        effect='fade'
        timingEffect={300}
        buttonPosition="default"
        borderColorSelected='#f4442e'
        buttonBgColor={{
          default: '#f1f1f1',
          hover: '#ddd'
        }}
      />
    </div>
  );
}
