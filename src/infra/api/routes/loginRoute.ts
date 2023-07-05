import httpClient from '@/infra/api/httpClient'
import { HttpResponse } from '@/infra/api/httpResponse'

interface LoginRequest {
    email: string
    password: string
}

interface LoginResponse {
    name: string
    isEmailVerified: boolean
}

export const login = async ({ email, password }: LoginRequest): Promise<HttpResponse<LoginResponse>> => {
    return await httpClient.POST('/login', {
        email,
        password
    })
}
