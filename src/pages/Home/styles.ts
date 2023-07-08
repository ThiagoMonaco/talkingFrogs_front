import styled, { keyframes } from 'styled-components'

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 510px;
  margin: 0 auto;
  padding: 0 15px;
`

export const HomeSubTitleStyled = styled.h2`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  text-align: center;

  @media (max-width: 400px) {
    font-size: ${({theme}) => theme.fontSize.large};
  }
`

export const SearchUserFormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px
`

export const HomeAuthButtonsContainerStyled = styled.div`
  display: flex;
  gap: 25px;
`

const slideIn = keyframes`
  from {
    transform: translateX(-40%);
    opacity: 0;
  }
  
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const HomeContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 0.5s ease-in-out;
`