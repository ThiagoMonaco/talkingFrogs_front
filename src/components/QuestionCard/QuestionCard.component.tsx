import { FC, useRef } from 'react'
import { QuestionCardStyled } from '@components/QuestionCard/styles'
import { AskModeCard } from '@components/QuestionCard/AskMode/AskModeCard.component'

interface QuestionCardProps {
    isAskMode?: boolean
    username: string
}

export const QuestionCard:FC<QuestionCardProps> = ({ isAskMode = true, username }) => {
    const questionCardRef = useRef<HTMLDivElement>(null)

    return (
        <QuestionCardStyled
            className={isAskMode ? 'ask-mode' : ''}
            ref={questionCardRef}
        >
            {isAskMode ?
                <AskModeCard username={username} questionCardRef={questionCardRef} />
                :
                null
            }
        </QuestionCardStyled>
    )
}