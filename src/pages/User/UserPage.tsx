'use client'
import { FC, useEffect, useState } from 'react'
import { UserPageContainer, UserPageTitleStyled } from '@/pages/User/styles'
import { QuestionCard } from '@/components'
import api from '@/infra/api/api'
import { QuestionModel } from '@/domain/models/questionModel'
import { text } from 'stream/consumers'

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
        <QuestionCard isInitialAskMode={true} username={username}/>
        {questions.map(question => {
            return <QuestionCard preText={question.question} key={question.questionId} username={username}/>
        })}
    </UserPageContainer>
}