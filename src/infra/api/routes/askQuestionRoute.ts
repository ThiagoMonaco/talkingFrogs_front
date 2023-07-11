import { HttpResponse } from '@/infra/api/httpResponse'
import httpClient from '@/infra/api/httpClient'

interface AskQuestionRequest {
    username: string
    question: string
}


interface AskQuestionResponse {
    questionId: string
}

export const askQuestion = async ({username, question}: AskQuestionRequest): Promise<HttpResponse<AskQuestionResponse>> => {
    return await httpClient.POST('/question/ask', {
        accountName: username,
        question
    })
}