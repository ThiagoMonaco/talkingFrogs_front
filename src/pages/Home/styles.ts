import styled from 'styled-components'

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
`

export const HomeSubTitleStyled = styled.h2`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  text-align: center;
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