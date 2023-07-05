import { createAccount } from '@/infra/api/routes/createAccountRoute'
import { login } from '@/infra/api/routes/loginRoute'
import { validateEmailToken } from '@/infra/api/routes/validateEmailTokenRoute'

export default {
	createAccount,
	login,
	validateEmailToken
}