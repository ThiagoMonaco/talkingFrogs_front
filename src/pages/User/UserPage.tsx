'use client'
import { FC } from 'react'
import { UserPageContainer, UserPageTitleStyled } from '@/pages/User/styles'
import { QuestionCard } from '@/components'

interface UserPageProps {
    username: string
}

export const UserPage: FC<UserPageProps> = ({username }) => {
    return <UserPageContainer>
        <UserPageTitleStyled>
            {username}
        </UserPageTitleStyled>
        <QuestionCard />
    </UserPageContainer>
}