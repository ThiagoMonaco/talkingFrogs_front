import styled, { keyframes } from 'styled-components'



const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const LogoStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  animation: ${slideInTop} 0.5s forwards;
  
  @media (max-width: 400px) {
    > svg {
      width: 150px;
      height: 150px;
    }
  }
`

const slideOutLeft = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const LogoTextStyled = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  line-height: 35px;
  opacity: 0;
  transform: translateX(-50%);
  animation: ${slideOutLeft} 0.5s forwards;
  animation-delay: 1.5s;
  text-align: left;
`