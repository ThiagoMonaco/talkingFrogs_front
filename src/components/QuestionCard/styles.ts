import styled from 'styled-components'

export const QuestionCardStyled = styled.div`
  width: 100%;
  border-left: 2.5px solid ${({theme}) => theme.colors.black};
  border-right: 4px solid ${({theme}) => theme.colors.black};
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  border-top: 2.5px solid ${({theme}) => theme.colors.black};
  border-radius: 10px;
  padding: 15px;
  background: white;
`