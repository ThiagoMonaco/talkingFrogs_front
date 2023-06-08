import { REGEX } from '@/helpers/regex'

export const validateEmailPattern = (email: string): boolean => {
	return REGEX.EMAIL.test(email)
}