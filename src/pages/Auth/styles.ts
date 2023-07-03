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


export const AuthContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 25px;
  animation: ${slideRight} 0.5s ease-in-out;
  
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