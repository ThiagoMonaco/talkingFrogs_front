import { HttpResponse } from '@/infra/api/httpResponse'
import HttpClient from '@/infra/api/httpClient'

export interface ValidateEmailTokenRequest {
    token: string
}

export const validateEmailToken = async ({token}: ValidateEmailTokenRequest): Promise<HttpResponse<void>> => {
    return HttpClient.POST('/validate-email', {token})
}