import styled from 'styled-components'

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const UserPageTitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  display: flex;
  justify-content: center;
  width: 100%;
`