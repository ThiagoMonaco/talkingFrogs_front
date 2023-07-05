import { createAccount } from '@/infra/api/routes/createAccountRoute'
import { login } from '@/infra/api/routes/loginRoute'
import { validateEmailToken } from '@/infra/api/routes/validateEmailTokenRoute'
import { resendEmailToken } from '@/infra/api/routes/resendEmailTokenRoute'
export default {
	createAccount,
	login,
	validateEmailToken,
	resendEmailToken
}