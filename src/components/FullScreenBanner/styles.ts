import styled, { keyframes } from 'styled-components'

interface FullScreenBannerStyledProps {
    color: string
    side: 'left' | 'right'
}

export const FullScreenBannerStyled = styled.div<FullScreenBannerStyledProps>`
  display: flex;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.color};
  flex-direction: ${props => props.side === 'right' ? 'row' : 'row-reverse'};
`

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`

export const FullScreenBannerImageStyled = styled.div`
  max-width: 50%;
  width: 50%;
  height: 100vh;
  position: relative;
  display: block;
  animation: ${slideIn} 1s ease-in-out;

  @media (max-width: 768px) {
    display: none;
    max-width: 100%;
    width: 100%;
  }

  > img {
    object-fit: cover;
  }
`

interface FullScreenBannerContentStyledProps {
    firstRender: boolean
}

export const FullScreenBannerContentStyled = styled.div<FullScreenBannerContentStyledProps>`
  width: 50%;
  max-width: 50%;
  max-height: 100vh;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    opacity: ${props => props.firstRender ? '0' : '1'};
    animation-delay: ${props => props.firstRender ? '1s' : '0s'};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`