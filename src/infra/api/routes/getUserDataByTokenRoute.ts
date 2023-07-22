import { HttpResponse } from '@/infra/api/httpResponse'
import httpClient from '@/infra/api/httpClient'

interface GetUserDataByTokenResponse {
    name: string
    email: string
    isEmailVerified: boolean
}

export const getUserDataByToken = async (): Promise<HttpResponse<GetUserDataByTokenResponse>> => {
    return await httpClient.GET(`/user-token`)
}

