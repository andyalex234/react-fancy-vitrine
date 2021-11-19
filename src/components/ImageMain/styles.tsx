
const ImageContainer = {
  transition: 'all .5s ease',
  position: 'relative'
} as React.CSSProperties

const ContainerHovered = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  transition: 'opacity .5s ease',
  zIndex: 89
} as React.CSSProperties

const SelectedImage = {
  width: '100%',
  height: 500,
  marginBottom: 8,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export {
  ImageContainer,
  SelectedImage,
  ContainerHovered
}
