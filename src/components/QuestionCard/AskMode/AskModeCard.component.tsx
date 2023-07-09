import { ChangeEvent, FC, useState } from 'react'
import {
    AskModeCardActions, AskModeCardButton,
    AskModeCardInputCounter,
    AskModeCardStyled,
    AskModeCardTextArea
} from '@components/QuestionCard/AskMode/styles'

export const AskModeCard: FC = () => {
    const [text, setText] = useState('')
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    return (
        <AskModeCardStyled>
            <AskModeCardTextArea maxLength={250} onChange={handleInputChange}/>
            <AskModeCardActions>
                <AskModeCardInputCounter>
                    {text.length}/250
                </AskModeCardInputCounter>
                <AskModeCardButton>
                    Ask!
                </AskModeCardButton>
            </AskModeCardActions>
        </AskModeCardStyled>
    )
}