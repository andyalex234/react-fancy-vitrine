
const borderSize = 3

const ImageSelected = {
  border: `${borderSize}px solid`,
  cursor: 'default'
}

const Thumb = {
  marginRight: 10,
  height: 150,
  minWidth: 150,
  border: `${borderSize}px solid #ffa70000`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  transition: 'background-size .3s ease',
  cursor: 'pointer'
}

const ThumbFancy = {
  border: '0',
  marginRight: 0
}

export {
  Thumb,
  ImageSelected,
  ThumbFancy
}
