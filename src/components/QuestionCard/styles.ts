import styled, { keyframes } from 'styled-components'



const changeQuestionCardHeight = keyframes`
  from {
    max-height: 255px
  }

  to {
    max-height: 190px;
  }
`

export const QuestionCardStyled = styled.div`
  width: 100%;
  border-left: 2.5px solid ${({theme}) => theme.colors.black};
  border-right: 4px solid ${({theme}) => theme.colors.black};
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  border-top: 2.5px solid ${({theme}) => theme.colors.black};
  border-radius: 10px;
  padding: 15px;
  background: ${({theme}) => theme.colors.lightYellow};
  
  &.ask-mode {
    background: ${({theme}) => theme.colors.white};
    max-height: 255px;
    cursor: text;
  }

  &.default-mode {
    max-height: 190px;
    height: 100%;
  }
  
  &.transition-mode {
    max-height: 255px;
    background: ${({theme}) => theme.colors.lightYellow};
    transition: max-height 1s ease;
    animation: ${changeQuestionCardHeight} 1s ease forwards;
    animation-delay: 0.3s;
  }
`

export const AskCardStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const AskModeCardTextArea = styled.textarea`
  width: 100%;
  height: 170px;
  border: none;
  border-radius: 10px;
  resize: none;
  font-size: ${({theme}) => theme.fontSize.medium};
  outline: none;
  background: transparent;
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
`

export const CardQuestionText = styled.p`
  width: 100%;
  height: 170px;
  border: none;
  border-radius: 10px;
  resize: none;
  font-size: ${({theme}) => theme.fontSize.medium};
  outline: none;
  background: transparent;
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  margin: 0;
`

const slideOutBottom = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  
  100% {
    display: none;
    transform: translateY(70%);
    opacity: 0;
  }
  
`

export const AskModeCardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  
  &.hidden-actions {
    animation: ${slideOutBottom} 0.5s ease-in-out forwards;
    cursor: default;
    
    & > * {
      cursor: default;
      pointer-events: none;
    }
  }
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