import arrowLeft from '../../assets/arrow-left'
import arrowRight from '../../assets/arrow-right'
import arrowTop from '../../assets/arrow-top'
import arrowBottom from '../../assets/arrow-bottom'

const Button = {
  position: 'absolute',
  fontSize: 0,
  zIndex: 200,
  letterSpacing: -5000,
  background: 'center no-repeat',
  backgroundColor: '#f1f1f1',
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
  backgroundImage: `url(${arrowLeft})`
}

const ButtonRight = {
  backgroundImage: `url(${arrowRight})`
}

const ButtonTop = {
  backgroundImage: `url(${arrowTop})`
}

const ButtonBottom = {
  backgroundImage: `url(${arrowBottom})`
}

export {
  Button,
  ButtonHover,
  ButtonLeft,
  ButtonRight,
  ButtonTop,
  ButtonBottom
}
