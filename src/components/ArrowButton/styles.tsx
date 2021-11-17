import arrowLeft from '../../assets/arrow-left'
import arrowRight from '../../assets/arrow-right'

const Button = {
  position: 'absolute',
  top: '40%',
  fontSize: 0,
  letterSpacing: -5000,
  background: '#f1f1f1 center no-repeat',
  backgroundSize: 20,
  width: 40,
  height: 40,
  padding: 10,
  boxShadow: '0px 1px 5px #000',
  borderRadius: '50%',
  border: 0,
  display: 'block',
  cursor: 'pointer',
  transition: 'all .3s ease'
} as React.CSSProperties

const ButtonHover = {
  backgroundColor: '#ddd'
}

const ButtonLeft = {
  left: 10,
  backgroundImage: `url(${arrowLeft})`
}

const ButtonRight = {
  right: 10,
  backgroundImage: `url(${arrowRight})`
}

export {
  Button,
  ButtonHover,
  ButtonLeft,
  ButtonRight
}
