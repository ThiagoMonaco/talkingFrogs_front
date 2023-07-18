import styled, { css, keyframes } from 'styled-components'
import { QuestionCard } from '@/components'


const changeQuestionCardHeight = keyframes`
  from {
    max-height: 255px
  }

  to {
    max-height: 190px;
  }
`

const openQuestionCard = keyframes`
  from {
    max-height: 0;
  }

  to {
    max-height: 255px;
  }
`

const deleteQuestionCard = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  
  to {
    visibility: hidden;
    transform: translateX(-100%);
    opacity: 0;
    height: 0;
    padding: 0;
    border: none;
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
  overflow: hidden;

  &.ask-mode {
    background: ${({theme}) => theme.colors.white};
    animation: ${openQuestionCard} 1s ease forwards;
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

  &.answer-mode {
    max-height: 455px;
  }
  
  &.deleting {
    animation: ${deleteQuestionCard} 1s forwards;
  }
`

export const QuestionCardAnswerInput = styled.textarea`
  height: 170px;
  resize: none;
  font-size: ${({theme}) => theme.fontSize.medium};
  outline: none;
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  width: 100%;
  border: none;
  background: transparent;
`

export const PreAnsweredStyle = styled.p`
  width: 100%;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`

export const QuestionCardAnswerBox = styled.div`
  width: 100%;
  padding: 5px;
  border-left: 2.5px solid ${({theme}) => theme.colors.black};
  border-right: 4px solid ${({theme}) => theme.colors.black};
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  border-top: 2.5px solid ${({theme}) => theme.colors.black};
  border-radius: 10px;
  background: ${({theme}) => theme.colors.white};
`

export const AskCardStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;;
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
  max-height: 170px;
  min-height: 100px;
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

export const DeleteQuestionButtonStyled = styled.button`
  border-top: 2px solid ${props => props.theme.colors.black};
  border-right: 3px solid ${props => props.theme.colors.black};
  border-bottom: 3px solid ${props => props.theme.colors.black};
  border-left: 2px solid ${props => props.theme.colors.black};
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.red};
  font-weight: bolder;
  padding: 5px 10px;
  font-size: ${({theme}) => theme.fontSize.small};
  cursor: pointer;
  align-self: flex-end;
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