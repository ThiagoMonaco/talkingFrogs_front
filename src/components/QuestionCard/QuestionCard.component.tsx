import { FC } from 'react'
import { QuestionCardStyled } from '@components/QuestionCard/styles'
import { AskModeCard } from '@components/QuestionCard/AskMode/AskModeCard.component'

interface QuestionCardProps {
    isAskMode?: boolean
}

export const QuestionCard:FC<QuestionCardProps> = ({ isAskMode = true }) => {
    return (
        <QuestionCardStyled>
            {isAskMode ?
                <AskModeCard />
                :
                null
            }
        </QuestionCardStyled>
    )
}