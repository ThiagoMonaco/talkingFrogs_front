import { ChangeEvent, FC, useRef, useState } from 'react'
import api from '@/infra/api/api'
import {
    QuestionCardStyled,
    AskModeCardActions,
    AskModeCardButton,
    AskModeCardInputCounter,
    AskCardStyled,
    AskModeCardTextArea, CardQuestionText
} from '@components/QuestionCard/styles'

interface QuestionCardProps {
    isInitialAskMode?: boolean
    preText?: string
    username: string
    handleAskQuestion?: () => void
}

export const QuestionCard:FC<QuestionCardProps> = ({
    handleAskQuestion = () => {},
    isInitialAskMode = false,
    username,
    preText = '' }) => {
    const questionCardRef = useRef<HTMLDivElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const [text, setText] = useState(preText)
    const [isAsking, setIsAsking] = useState(isInitialAskMode)

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const hideCardActions = () => {
        actionsRef.current?.classList.add('hidden-actions')
    }

    const handleChangeBackgroundColor = () => {
        questionCardRef.current?.classList.add('ask-mode-transition')
    }

    const blockTextArea = () => {
        textAreaRef.current?.setAttribute('disabled', 'true')
    }

    const sendQuestion = async () => {
        await api.askQuestion({ username, question: text })
    }

    const handleClickButton = async () => {
        hideCardActions()
        handleChangeBackgroundColor()
        blockTextArea()
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
                        <AskModeCardButton onClick={handleClickButton}>
                            Ask!
                        </AskModeCardButton>
                    </AskModeCardActions>
                )}
            </AskCardStyled>
        </QuestionCardStyled>
    )
}