import { HttpResponse } from '@/infra/api/httpResponse'
import httpClient from '@/infra/api/httpClient'

interface DeleteQuestionRoute {
    questionId: string
}


export const deleteQuestion = async ({questionId }: DeleteQuestionRoute): Promise<HttpResponse<void>> => {
    const response = await httpClient.POST('/question/remove', {
        questionId
    })

    return response
}