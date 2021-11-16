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
    <div>
      <ReactFancyVitrine
        images={images}
      />
    </div>
  );
}
