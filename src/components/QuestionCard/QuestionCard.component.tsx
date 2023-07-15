import { ChangeEvent, FC, useRef, useState } from 'react'
import api from '@/infra/api/api'
import {
    QuestionCardStyled,
    AskModeCardActions,
    AskModeCardButton,
    AskModeCardInputCounter,
    AskCardStyled,
    AskModeCardTextArea,
    CardQuestionText,
    QuestionCardAnswerBox,
    QuestionCardAnswerInput,
    PreAnsweredStyle,
    DeleteQuestionButtonStyled
} from '@components/QuestionCard/styles'

interface QuestionCardProps {
    isInitialAskMode?: boolean
    preText?: string
    username: string
    handleAskQuestion?: () => void
    canAnswer?: boolean
    preAnswer?: string
    questionId?: string
}

export const QuestionCard:FC<QuestionCardProps> = ({
    handleAskQuestion = () => {},
    isInitialAskMode = false,
    questionId = '',
    username,
    canAnswer = false,
    preText = '',
    preAnswer = ''}) => {
    const questionCardRef = useRef<HTMLDivElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const answerTextAreaRef = useRef<HTMLTextAreaElement>(null)

    const [text, setText] = useState(preText)
    const [isAsking, setIsAsking] = useState(isInitialAskMode)
    const [answer, setAnswer] = useState(preAnswer)

    console.log('preAnswer', preAnswer)

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
        if(canAnswer || preAnswer !== '') {
            return 'answer-mode'
        }

        if(isInitialAskMode && isAsking) {
            return 'ask-mode'
        }

        if(isInitialAskMode && !isAsking) {
            return 'transition-mode'
        }

        return 'default-mode'
    }

    const handleAnswerButton = async () => {
        hideCardActions(actionsRef)
        handleChangeBackgroundColor(questionCardRef)
        blockTextArea(answerTextAreaRef)
        await api.answerQuestion({questionId, answer})
        setIsAsking(false)
    }

    const handleDeleteQuestion = async () => {
        await api.deleteQuestion({questionId})
    }

    return (
        <QuestionCardStyled
            className={getCardClassName()}
            ref={questionCardRef}
        >
            <AskCardStyled>
                {canAnswer && <DeleteQuestionButtonStyled onClick={handleDeleteQuestion}> delete </DeleteQuestionButtonStyled>}
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
                {(canAnswer || preAnswer !== '') &&
                    <QuestionCardAnswerBox>
                        {preAnswer === '' ? <>
                            <QuestionCardAnswerInput ref={answerTextAreaRef} maxLength={250} onChange={handleAnswerChange} />
                            <AskModeCardActions ref={actionsRef}>
                                <AskModeCardInputCounter>
                                    {answer.length}/250
                                </AskModeCardInputCounter>
                                <AskModeCardButton onClick={handleAnswerButton}>
                                    Answer!
                                </AskModeCardButton>
                            </AskModeCardActions>
                        </>
                            :
                            <PreAnsweredStyle>{answer}</PreAnsweredStyle>
                        }
                    </QuestionCardAnswerBox>
                }
            </AskCardStyled>
        </QuestionCardStyled>
    )
}