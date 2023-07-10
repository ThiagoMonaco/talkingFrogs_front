import { FC, useRef } from 'react'
import { QuestionCardStyled } from '@components/QuestionCard/styles'
import { AskModeCard } from '@components/QuestionCard/AskMode/AskModeCard.component'

interface QuestionCardProps {
    isAskMode?: boolean
}

export const QuestionCard:FC<QuestionCardProps> = ({ isAskMode = true }) => {
    const questionCardRef = useRef<HTMLDivElement>(null)

    return (
        <QuestionCardStyled
            className={isAskMode ? 'ask-mode' : ''}
            ref={questionCardRef}
        >
            {isAskMode ?
                <AskModeCard questionCardRef={questionCardRef} />
                :
                null
            }
        </QuestionCardStyled>
    )
}