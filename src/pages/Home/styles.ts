import styled from 'styled-components'

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