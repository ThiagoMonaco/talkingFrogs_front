import styled from 'styled-components'

export const AskModeCardStyled = styled.div`
  width: 100%;
  height: 100%;
`

export const AskModeCardTextArea = styled.textarea`
  width: 100%;
  height: 165px;
  border: none;
  border-radius: 10px;
  resize: none;
  font-size: ${({theme}) => theme.fontSize.medium};
`


export const AskModeCardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`

export const AskModeCardInputCounter = styled.p`
  margin: 0;
`

export const AskModeCardButton = styled.button`
  border-left: 1.5px solid ${({theme}) => theme.colors.black};
  border-right: 2.5px solid ${({theme}) => theme.colors.black};
  border-bottom: 2.5px solid ${({theme}) => theme.colors.black};
  border-top: 1.5px solid ${({theme}) => theme.colors.black};
  border-radius: 10px;
  padding: 5px 20px;
  background: ${({theme}) => theme.colors.lightYellow};
  height: 40px;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: bold;
  cursor: pointer;
`