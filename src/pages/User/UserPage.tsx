'use client'
import { FC, useContext, useEffect, useState } from 'react'
import { LogoutButtonStyled, NewQuestionsList, UserPageContainer, UserPageTitleStyled } from '@/pages/User/styles'
import { QuestionCard } from '@/components'
import api from '@/infra/api/api'
import { QuestionModel } from '@/domain/models/questionModel'
import { text } from 'stream/consumers'
import { UserContext } from '@/context/UserContext'

interface UserPageProps {
    username: string
}

export const UserPage: FC<UserPageProps> = ({username}) => {
    const {userData, logOutUser} = useContext(UserContext)
    const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [newQuestions, setNewQuestions] = useState<any>([])
    const [isFromUser, setIsFromUser] = useState<boolean>(false)

    const getUserData = async () => {
        return await api.getUserData({username})
    }

    const removeQuestion = (questionId: string) => {
        setQuestions(oldQuestions => oldQuestions.filter(question => question.questionId !== questionId))
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
            const questionsReversed = data.questions.slice().reverse()
            setQuestions(questionsReversed)
            setIsFromUser(username === userData.name)
        })
    }, [username])

    useEffect(() => {
        addNewQuestion()
    }, [])

    return <UserPageContainer>
        {isFromUser && <LogoutButtonStyled onClick={logOutUser}> Logout </LogoutButtonStyled>}
        <UserPageTitleStyled>
            {username}
        </UserPageTitleStyled>
        {!isFromUser && (
            <NewQuestionsList>
                {newQuestions.map((question: any) => question)}
            </NewQuestionsList>
        )}
        {questions.map(question => {
            return <QuestionCard
                preAnswer={question.answer ? question.answer : ''}
                canAnswer={isFromUser}
                preText={question.question}
                key={question.questionId}
                username={username}
                questionId={question.questionId}
                handleRemoveQuestion={removeQuestion}
            />
        })}
    </UserPageContainer>
}