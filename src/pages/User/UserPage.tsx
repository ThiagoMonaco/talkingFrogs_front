'use client'
import { FC, useEffect, useState } from 'react'
import { UserPageContainer, UserPageTitleStyled } from '@/pages/User/styles'
import { QuestionCard } from '@/components'
import api from '@/infra/api/api'
import { QuestionModel } from '@/domain/models/questionModel'

interface UserPageProps {
    username: string
}

export const UserPage: FC<UserPageProps> = ({ username }) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([])

    const getUserData = async () => {
        return await api.getUserData({ username })
    }

    useEffect( () => {
        getUserData().then((res) => {
            const { data, status } = res
            setQuestions(data.questions)
        })
    }, [username])

    return <UserPageContainer>
        <UserPageTitleStyled>
            {username}
        </UserPageTitleStyled>
        <QuestionCard isAskMode={true} username={username}/>
        {questions.map(question => {
            return <QuestionCard key={question.questionId} username={username}/>
        })}
    </UserPageContainer>
}