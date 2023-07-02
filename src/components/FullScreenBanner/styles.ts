import styled from 'styled-components'

interface FullScreenBannerStyledProps {
	color: string
	side: 'left' | 'right'
}

export const FullScreenBannerStyled = styled.div<FullScreenBannerStyledProps> `
  display:flex;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.color};
  flex-direction: ${props => props.side === 'right' ? 'row' : 'row-reverse'};
`


export const FullScreenBannerImageStyled = styled.div `
  max-width: 50%;
  width: 50%;
  height: 100vh;
  position: relative;
  display: block;
  
  @media (max-width: 768px) {
	  display: none;
	  max-width: 100%;
	  width: 100%;
  }
	
  > img {
	object-fit: cover;
  }
`

export const FullScreenBannerContentStyled = styled.div `
  width: 50%;
  max-width: 50%;
  max-height: 100vh;
  height: 100%;
	
  @media (max-width: 768px) {
		max-width: 100%;
		width: 100%;
	}
`