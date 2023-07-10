import { ChangeEvent, FC, RefObject, useRef, useState } from 'react'
import {
    AskModeCardActions, AskModeCardButton,
    AskModeCardInputCounter,
    AskModeCardStyled,
    AskModeCardTextArea
} from '@components/QuestionCard/AskMode/styles'

interface AskModeCardProps {
    questionCardRef: RefObject<HTMLDivElement>
}

export const AskModeCard: FC<AskModeCardProps> = ({ questionCardRef }) => {
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

    const handleClickButton = () => {
        hideCardActions()
        handleChangeBackgroundColor()
        blockTextArea()
        //descer card
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