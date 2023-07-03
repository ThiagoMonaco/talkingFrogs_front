import styled, { keyframes } from 'styled-components'
import { fontSize } from '@/helpers/ui/fonts'

const slideRight = keyframes` 
	from { 
		transform: translateX(-100px);
		opacity: 0;
		z-index: -1;
	}
	
	to {
		transform: translateX(0%);
		opacity: 1;
		z-index: 1;
	}
`

const slideLeft = keyframes`
	to {
		transform: translateX(+200px);
		opacity: 0;
		z-index: -1;
	}
`

interface AuthContainerStyledProps {
    isUnmounting: boolean
}

export const AuthContainerStyled = styled.div<AuthContainerStyledProps>`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 25px;
  animation: ${props => props.isUnmounting ? slideLeft : slideRight} 0.5s forwards;
  
  form {
    width: 80%;
    display: flex;
    justify-content: center;
  }
`

export const AuthTitleStyled = styled.div`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  font-weight: 600;
`