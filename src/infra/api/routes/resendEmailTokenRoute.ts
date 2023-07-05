import { HttpResponse } from '@/infra/api/httpResponse'
import HttpClient from '@/infra/api/httpClient'

interface ResendEmailTokenRequest {
    email: string
}

export const resendEmailToken = async ({email}: ResendEmailTokenRequest): Promise<HttpResponse<void>> => {
    return HttpClient.POST('/send-email-token', {email})
}