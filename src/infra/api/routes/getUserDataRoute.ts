import { QuestionModel } from '@/domain/models/questionModel'
import httpClient from '@/infra/api/httpClient'
import { HttpResponse } from '@/infra/api/httpResponse'

interface GetUserDataRequest {
    username: string
}

interface GetUserDataResponse {
    name: string
    id: string
    questions: QuestionModel[]
}

export const getUserData = async ({ username }: GetUserDataRequest): Promise<HttpResponse<GetUserDataResponse>> => {
    return await httpClient.GET(`/user/${username}`)
}