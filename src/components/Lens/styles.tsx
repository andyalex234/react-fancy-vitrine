
const ContainerLens = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 99,
  transition: 'opacity .2s ease',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '1px solid #000'
} as React.CSSProperties

const ImageLens = {
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  boxSizing: 'border-box'
} as React.CSSProperties

export {
  ContainerLens,
  ImageLens
}
