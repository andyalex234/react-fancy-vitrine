
const CarouselContainer = {
  position: 'relative',
  zIndex: 100
} as React.CSSProperties

const Images = {
  display: 'flex',
  maxWidth: '100%',
  overflowX: 'hidden'
} as React.CSSProperties

const borderSize = 3

const ImageSelected = {
  border: `${borderSize}px solid`
}

const Image = {
  marginRight: 10,
  height: 150,
  minWidth: 150,
  border: `${borderSize}px solid #ffa70000`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export {
  CarouselContainer,
  Image,
  ImageSelected,
  Images
}
