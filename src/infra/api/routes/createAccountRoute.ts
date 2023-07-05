import httpClient from '@/infra/api/httpClient'
import { HttpResponse } from '@/infra/api/httpResponse'

interface CreateAccountRequest {
	name: string
	email: string
	password: string
	passwordConfirmation: string
}

interface CreateAccountResponse {
	accessToken: string
}

export const createAccount = async ({name, email, password, passwordConfirmation}: CreateAccountRequest): Promise<HttpResponse<CreateAccountResponse>> => {
	const response = await httpClient.POST('/signup', {
		name,
		email,
		password,
		passwordConfirmation
	})

	return response
}
