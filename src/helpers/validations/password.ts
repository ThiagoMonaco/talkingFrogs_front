import { REGEX } from '@/helpers/regex'

export const validatePassword = (password: string) => {
	return REGEX.PASSWORD.test(password)
}