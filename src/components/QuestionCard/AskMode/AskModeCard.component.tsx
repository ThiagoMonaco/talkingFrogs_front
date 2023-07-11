import { ChangeEvent, FC, RefObject, useRef, useState } from 'react'
import {
    AskModeCardActions, AskModeCardButton,
    AskModeCardInputCounter,
    AskModeCardStyled,
    AskModeCardTextArea
} from '@components/QuestionCard/AskMode/styles'
import api from '@/infra/api/api'

interface AskModeCardProps {
    questionCardRef: RefObject<HTMLDivElement>
    username: string
}

export const AskModeCard: FC<AskModeCardProps> = ({ questionCardRef, username }) => {
    const actionsRef = useRef<HTMLDivElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [text, setText] = useState('')
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
    }

    return (
        <AskModeCardStyled>
            <AskModeCardTextArea ref={textAreaRef} maxLength={250} onChange={handleInputChange}/>
            <AskModeCardActions ref={actionsRef}>
                <AskModeCardInputCounter>
                    {text.length}/250
                </AskModeCardInputCounter>
                <AskModeCardButton onClick={handleClickButton}>
                    Ask!
                </AskModeCardButton>
            </AskModeCardActions>
        </AskModeCardStyled>
    )
}