# React Fancy Vitrine

> A fancy vitrine to your products and galleries in react.

[![NPM](https://img.shields.io/npm/v/react-fancy-vitrine.svg)](https://www.npmjs.com/package/react-fancy-vitrine) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Credits
> A lib based on [react-image-carousel](https://github.com/davehowson/react-image-carousel) and [react-image-magnifiers](https://github.com/adamrisberg/react-image-magnifiers).


![Gif preview](https://github.com/leoncarey/react-fancy-vitrine/blob/main/docs/preview.gif?raw=true)

## Install

```bash
npm install --save react-fancy-vitrine
```
or
```bash
yarn add --save react-fancy-vitrine
```

## Usage

```tsx
import ReactFancyVitrine from 'react-fancy-vitrine'

function App () {
    return (
      <div>
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
    )
}
```

## Props

| Attr                  | Required  | Default values   | Accept values  |
| --------------        | --------- | ---------        | ----           |
| images                | yes       | -                |    -           |
| containerWidth        | no        | 600              |    -           |
| borderColorSelected   | no        | '#f4442e'        |    -           |
| buttonPosition        | no        | 'default'        | default \| default-outer \| center \| center-outer |
| buttonBgColor.default | no        | '#f1f1f1'        |    -           |
| buttonBgColor.hover   | no        | '#ddd'           |    -           |
| effect                | no        | 'default'        | 'default' \| 'fade' |
| timingEffect          | no        | 300              | -              |
| className             | no        | -                | -              |

```tsx
{
  images?: ImageType[];             // Array with ImageType objects
  containerWidth?: string | number; // Container element width
  borderColorSelected?: string;     // Border color for selected thumb
  buttonPosition?: string;          // Positions of buttons Prev and Next
  buttonBgColor?: {
    default?: string; // Buttons color default
    hover?: string;   // Buttons color when hover it
  };
  effect?: string;          // Carousel effect 
  timingEffect?: number;    // Timing transition between effects in milliseconds
  className?: string;       // Your custom className
}
```

## ImageType
```tsx
{
  id?: number;
  url: string;
}
```

## License

MIT © [leoncarey](https://github.com/leoncarey)
