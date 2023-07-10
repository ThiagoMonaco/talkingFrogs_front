import { ChangeEvent, FC, useRef, useState } from 'react'
import {
    AskModeCardActions, AskModeCardButton,
    AskModeCardInputCounter,
    AskModeCardStyled,
    AskModeCardTextArea
} from '@components/QuestionCard/AskMode/styles'

export const AskModeCard: FC = () => {
    const actionsRef = useRef<HTMLDivElement>(null)
    const [text, setText] = useState('')
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const hideCardActions = () => {
        actionsRef.current?.classList.add('hidden-actions')
    }

    const handleClickButton = () => {
        hideCardActions()
        console.log(text)
        // descer botao e contador
        // mudar background
        // mudar cor caractere
        //descer card
    }

    return (
        <AskModeCardStyled>
            <AskModeCardTextArea maxLength={250} onChange={handleInputChange}/>
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