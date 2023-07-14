import styled from 'styled-components'

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const UserPageTitleStyled = styled.h1`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  display: flex;
  justify-content: center;
  width: 100%;
`

export const NewQuestionsList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;
`

export const LogoutButtonStyled = styled.button`
  border-top: 2px solid ${props => props.theme.colors.black};
  border-right: 3px solid ${props => props.theme.colors.black};
  border-bottom: 3px solid ${props => props.theme.colors.black};
  border-left: 2px solid ${props => props.theme.colors.black};
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.red};
  font-weight: bolder;
  padding: 15px 20px;
  font-size: ${({theme}) => theme.fontSize.medium};
  cursor: pointer;
`