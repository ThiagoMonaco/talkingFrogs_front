import { HttpResponse } from '@/infra/api/httpResponse'
import httpClient from '@/infra/api/httpClient'

interface AnswerQuestionRequest {
    questionId: string
    answer: string
}


export const answerQuestion = async ({questionId, answer}: AnswerQuestionRequest): Promise<HttpResponse<void>> => {
    const response = await httpClient.POST('/question/answer', {
        questionId,
        answer
    })

    return response
}