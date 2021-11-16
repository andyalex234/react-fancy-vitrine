import styled from 'styled-components'

export const Container = styled.section`
  margin: 20px;
`
type ImageMainProps = {
  backgroundImage: string | undefined
}

export const ImageMain = styled.div<ImageMainProps>`
  width: 100%;
  height: 500px;
  margin-bottom: 8px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});
`

export const Carousel = styled.div`
  position: relative;

  .images {
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
  }

  .image-selected {
    border: 3px solid #ffa700;
  }

  .image {
    margin-right: 10px;
    height: 150px;
    min-width: 150px;
    border: 3px solid #ffa70000;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const ButtonDirection = styled.button`
  position: absolute;
  top: 40%;

  &.button-left {
    left: 10px;
  }

  &.button-right {
    right: 10px;
  }
`
