'use client'
import { FC, useEffect, useState } from 'react'
import { NewQuestionsList, UserPageContainer, UserPageTitleStyled } from '@/pages/User/styles'
import { QuestionCard } from '@/components'
import api from '@/infra/api/api'
import { QuestionModel } from '@/domain/models/questionModel'
import { text } from 'stream/consumers'

interface UserPageProps {
    username: string
}

export const UserPage: FC<UserPageProps> = ({username}) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [newQuestions, setNewQuestions] = useState<any>([])

    const getUserData = async () => {
        return await api.getUserData({username})
    }

    const addNewQuestion = () => {
        setNewQuestions(oldQuestions => [getNewQuestion(), ...oldQuestions])
    }

    const getNewQuestion = () => {
        return <QuestionCard key={newQuestions.length}
                             handleAskQuestion={addNewQuestion}
                             isInitialAskMode={true}
                             username={username}
                />
    }

    useEffect(() => {
        getUserData().then((res) => {
            const {data, status} = res
            setQuestions(data.questions)
        })
    }, [username])

    useEffect(() => {
        addNewQuestion()
    }, [])

    return <UserPageContainer>
        <UserPageTitleStyled>
            {username}
        </UserPageTitleStyled>
        <NewQuestionsList>
            {newQuestions.map((question: any) => question)}
        </NewQuestionsList>
        {questions.map(question => {
            return <QuestionCard preText={question.question} key={question.questionId} username={username}/>
        })}
    </UserPageContainer>
}