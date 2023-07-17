import { createAccount } from '@/infra/api/routes/createAccountRoute'
import { login } from '@/infra/api/routes/loginRoute'
import { validateEmailToken } from '@/infra/api/routes/validateEmailTokenRoute'
import { resendEmailToken } from '@/infra/api/routes/resendEmailTokenRoute'
import { getUserData } from '@/infra/api/routes/getUserDataRoute'
import { askQuestion } from '@/infra/api/routes/askQuestionRoute'
import { answerQuestion } from '@/infra/api/routes/answerQuestionRoute'
import { deleteQuestion } from '@/infra/api/routes/deleteQuestionRoute'
import { getUserDataByToken } from '@/infra/api/routes/getUserDataByTokenRoute'

export default {
	createAccount,
	login,
	validateEmailToken,
	resendEmailToken,
	getUserData,
	askQuestion,
	answerQuestion,
	deleteQuestion,
	getUserDataByToken
}