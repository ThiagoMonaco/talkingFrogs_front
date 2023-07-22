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
    DeleteQuestionButtonStyled, ErrorTextStyled
} from '@components/QuestionCard/styles'
import { Loading } from '@/components'

interface QuestionCardProps {
    isInitialAskMode?: boolean
    preText?: string
    username: string
    handleAskQuestion?: () => void
    canAnswer?: boolean
    preAnswer?: string
    questionId?: string
    handleRemoveQuestion?: (questionId: string) => void
}

export const QuestionCard: FC<QuestionCardProps> = ({
                                                        handleAskQuestion = () => {
                                                        },
                                                        isInitialAskMode = false,
                                                        questionId = '',
                                                        username,
                                                        canAnswer = false,
                                                        preText = '',
                                                        handleRemoveQuestion = () => {
                                                        },
                                                        preAnswer = ''
                                                    }) => {
    const questionCardRef = useRef<HTMLDivElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const answerTextAreaRef = useRef<HTMLTextAreaElement>(null)

    const [text, setText] = useState(preText)
    const [isAsking, setIsAsking] = useState(isInitialAskMode)
    const [answer, setAnswer] = useState(preAnswer)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setError('')
        setText(event.target.value)
    }

    const handleAnswerChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setError('')
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
        return await api.askQuestion({username, question: text})
    }

    const handleAskButton = async () => {
        setError('')
        if(text === '') {
            setError('Question field is empty')
            return
        }
        setIsLoading(true)
        const response = await sendQuestion()
        setError('')
        if (response.status !== 200) {
            setIsLoading(false)
            setError('Something went wrong')
            return
        }
        blockTextArea(textAreaRef)
        hideCardActions(actionsRef)
        handleChangeBackgroundColor(questionCardRef)
        handleAskQuestion()
        setIsAsking(false)
        setIsLoading(false)
    }

    const getCardClassName = () => {
        if (canAnswer || preAnswer !== '') {
            if (isDeleting) {
                return 'ask-mode deleting'
            }
            return 'answer-mode'
        }

        if (isInitialAskMode && isAsking) {
            return 'ask-mode'
        }

        if (isInitialAskMode && !isAsking) {
            return 'transition-mode'
        }

        return 'default-mode'
    }

    const handleAnswerButton = async () => {
        setError('')
        console.log(answer)
        if(answer === '') {
            setError('Answer field is empty')
            return
        }
        setIsLoading(true)
        blockTextArea(answerTextAreaRef)
        const res = await api.answerQuestion({questionId, answer})
        if (res.status !== 200) {
            setIsLoading(false)
            setError('Something went wrong')
            return
        }
        hideCardActions(actionsRef)
        handleChangeBackgroundColor(questionCardRef)
        setIsAsking(false)
        setIsLoading(false)
    }

    const handleDeleteQuestion = async () => {
        setError('')
        setIsLoading(true)
        const res = await api.deleteQuestion({questionId})
        setIsLoading(false)
        if (res.status !== 200) {
            setError('Something went wrong')
            return
        }
        setIsDeleting(true)
        setTimeout(() => {
            handleRemoveQuestion(questionId)
        }, 1000)
    }

    return (
        <QuestionCardStyled
            className={getCardClassName()}
            ref={questionCardRef}
        >
            <AskCardStyled>
                {canAnswer &&
                    <DeleteQuestionButtonStyled onClick={handleDeleteQuestion}>
                        {isLoading ?
                            <Loading size={15}/> :
                            'delete'
                        }
                    </DeleteQuestionButtonStyled>}
                {isAsking ?
                    <AskModeCardTextArea ref={textAreaRef} maxLength={250} onChange={handleInputChange}/>
                    :
                    <CardQuestionText>{text}</CardQuestionText>
                }
                {isInitialAskMode && (
                    <AskModeCardActions ref={actionsRef}>
                        {error !== '' && <ErrorTextStyled>{error}</ErrorTextStyled>}
                        <AskModeCardInputCounter>
                            {text.length}/250
                        </AskModeCardInputCounter>
                        <AskModeCardButton onClick={handleAskButton}>
                            {isLoading ?
                                <Loading size={20}/> :
                                'Ask!'
                            }
                        </AskModeCardButton>
                    </AskModeCardActions>
                )}
                {(canAnswer || preAnswer !== '') &&
                    <QuestionCardAnswerBox>
                        {preAnswer === '' ? <>
                                <QuestionCardAnswerInput ref={answerTextAreaRef} maxLength={250}
                                                         onChange={handleAnswerChange}/>
                                <AskModeCardActions ref={actionsRef}>
                                    {error !== '' && <ErrorTextStyled>{error}</ErrorTextStyled>}
                                    <AskModeCardInputCounter>
                                        {answer.length}/250
                                    </AskModeCardInputCounter>
                                    <AskModeCardButton onClick={handleAnswerButton}>
                                        {isLoading ?
                                            <Loading size={20}/> :
                                            'Answer!'
                                        }
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