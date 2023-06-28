import httpClient from '@/infra/api/httpClient'

interface CreateAccountRequest {
	name: string
	email: string
	password: string
	passwordConfirmation: string
}

interface CreateAccountResponse {
	accessToken: string
}

export const createAccount = async ({name, email, password, passwordConfirmation}: CreateAccountRequest): Promise<CreateAccountResponse> => {
	const response = await httpClient.POST('/signup', {
		name,
		email,
		password,
		passwordConfirmation
	})

	return response
}
