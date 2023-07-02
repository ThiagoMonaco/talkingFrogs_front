import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

interface LoadingStyledProps {
    backgroundColor: string
    color: string
    size: number
}

export const LoadingStyled = styled.div<LoadingStyledProps>`
  border: 5px solid ${props => props.backgroundColor};
  border-top: 5px solid ${props => props.color};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`
