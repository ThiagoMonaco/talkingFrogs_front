import httpClient from '@/infra/api/httpClient'

interface LoginRequest {
    email: string
    password: string
}

interface LoginResponse {
    name: string
    isEmailVerified: boolean
}

export const login = async ({email, password}: LoginRequest): Promise<LoginResponse> => {
    return await httpClient.POST('/login', {
        email,
        password
    })
}
