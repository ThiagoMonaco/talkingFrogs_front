import { ChangeEvent, FC, useRef, useState } from 'react'
import api from '@/infra/api/api'
import {
    QuestionCardStyled,
    AskModeCardActions,
    AskModeCardButton,
    AskModeCardInputCounter,
    AskCardStyled,
    AskModeCardTextArea, CardQuestionText, QuestionCardAnswerBox, QuestionCardAnswerInput
} from '@components/QuestionCard/styles'

interface QuestionCardProps {
    isInitialAskMode?: boolean
    preText?: string
    username: string
    handleAskQuestion?: () => void
    canAnswer?: boolean
}

export const QuestionCard:FC<QuestionCardProps> = ({
    handleAskQuestion = () => {},
    isInitialAskMode = false,
    username,
    canAnswer = false,
    preText = '' }) => {
    const questionCardRef = useRef<HTMLDivElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const answerTextAreaRef = useRef<HTMLTextAreaElement>(null)

    const [text, setText] = useState(preText)
    const [isAsking, setIsAsking] = useState(isInitialAskMode)
    const [answer, setAnswer] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const handleAnswerChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value)
    }

    const hideCardActions = (ref) => {
        ref.current?.classList.add('hidden-actions')
    }

    const handleChangeBackgroundColor = (ref) => {
        ref.current?.classList.add('ask-mode-transition')
    }

    const blockTextArea = (ref) => {
        ref.current?.setAttribute('disabled', 'true')
    }

    const sendQuestion = async () => {
        await api.askQuestion({ username, question: text })
    }

    const handleAskButton = async () => {
        hideCardActions(actionsRef)
        handleChangeBackgroundColor(questionCardRef)
        blockTextArea(textAreaRef)
        await sendQuestion()
        handleAskQuestion()
        setIsAsking(false)
    }

    const getCardClassName = () => {
        if(isInitialAskMode && isAsking) {
            return 'ask-mode'
        }

        if(isInitialAskMode && !isAsking) {
            return 'transition-mode'
        }

        if(canAnswer) {
            return 'answer-mode'
        }

        return 'default-mode'
    }

    return (
        <QuestionCardStyled
            className={getCardClassName()}
            ref={questionCardRef}
        >
            <AskCardStyled>
                {isAsking ?
                    <AskModeCardTextArea ref={textAreaRef} maxLength={250} onChange={handleInputChange}/>
                    :
                    <CardQuestionText>{text}</CardQuestionText>
                }
                {isInitialAskMode && (
                    <AskModeCardActions ref={actionsRef}>
                        <AskModeCardInputCounter>
                            {text.length}/250
                        </AskModeCardInputCounter>
                        <AskModeCardButton onClick={handleAskButton}>
                            Ask!
                        </AskModeCardButton>
                    </AskModeCardActions>
                )}
                {canAnswer &&
                    <QuestionCardAnswerBox>
                        <QuestionCardAnswerInput ref={answerTextAreaRef} maxLength={250} onChange={handleAnswerChange} />
                        <AskModeCardActions ref={actionsRef}>
                            <AskModeCardInputCounter>
                                {answer.length}/250
                            </AskModeCardInputCounter>
                            <AskModeCardButton onClick={handleAskButton}>
                                Answer!
                            </AskModeCardButton>
                        </AskModeCardActions>
                    </QuestionCardAnswerBox>
                }
            </AskCardStyled>
        </QuestionCardStyled>
    )
}