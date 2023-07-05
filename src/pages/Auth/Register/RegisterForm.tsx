'use client'

import { Form, Formik, FormikProps } from 'formik'
import React, { useContext, useState } from 'react'
import {
	formHasError,
	validateEmailPattern,
	validateLength,
	validatePassword,
	validateUsername
} from '@/helpers/validations'
import api from '@/infra/api/api'
import { MainButton, Input } from '@/components'
import { AuthFormContainerStyled, AuthInputFormContainerStyled } from "@/pages/Auth/styles"
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext'


interface RegisterFormData {
	username: string
	email: string
	password: string
	confirmPassword: string
}

export default function RegisterForm () {
	const router = useRouter()
	const { setUserData, setIsLogged } = useContext(UserContext)
	const [isLoading, setIsLoading] = useState(false)
	const initialValues: RegisterFormData = {
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	}

	const onSubmit = async (values: RegisterFormData) => {
		setIsLoading(true)
		const response = await api.createAccount({
			name: values.username,
			email: values.email,
			password: values.password,
			passwordConfirmation: values.confirmPassword,
		})

		if(response.status === 200) {
			setUserData({
				email: values.email,
				name: values.username,
				isEmailVerified: false
			})
			setIsLogged(true)
			router.push('/auth/validate-account')
		}
	}

	const formValidateUsername = (username: string) => {
		if (!validateUsername(username)) {
			return 'Username required'
		}

		return ''
	}

	const formValidateEmail = (email: string) => {
		if (!validateLength(email)) {
			return 'Email required'
		}

		if (!validateEmailPattern(email)) {
			return 'Invalid email'
		}

		return ''
	}

	const formValidatePassword = (password: string) => {
		if (!validateLength(password)) {
			return 'Password required'
		}

		if (!validatePassword(password)) {
			return 'Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number'
		}
		return ''
	}

	const formValidateConfirmPassword = (confirmPassword: string, originalPassword: string) => {
		if (!validateLength(confirmPassword)) {
			return 'Password confirmation required'
		}

		if (!validatePassword(confirmPassword)) {
			return 'Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number'
		}

		if (confirmPassword !== originalPassword) {
			return 'Passwords do not match'
		}

		return ''
	}

	return (
		<Formik
			onSubmit={onSubmit}
			initialValues={initialValues}
			validateOnChange={false}
			validateOnBlur={false}
		>
			{(props: FormikProps<RegisterFormData>) =>(
			<Form>
				<AuthFormContainerStyled>
					<AuthInputFormContainerStyled>
						<Input
							id={'username'}
							name={'username'}
							label={'Username'}
							validate={formValidateUsername}
							validateOnBlur
						/>
					</AuthInputFormContainerStyled>

					<AuthInputFormContainerStyled>
						<Input
							id={'email'}
							name={'email'}
							label={'Email'}
							validate={formValidateEmail}
							validateOnBlur
						/>
					</AuthInputFormContainerStyled>

					<AuthInputFormContainerStyled>
						<Input
							id={'password'}
							name={'password'}
							label={'Password'}
							validate={formValidatePassword}
							validateOnBlur
						/>
					</AuthInputFormContainerStyled>

					<AuthInputFormContainerStyled>
						<Input
							id={'confirmPassword'}
							name={'confirmPassword'}
							label={'Password confirmation'}
							validate={(value) => formValidateConfirmPassword(value, props.values.password)}
							validateOnBlur
						/>
					</AuthInputFormContainerStyled>
					<MainButton
						isLoading={isLoading}
						disabled={formHasError(props.errors)}
						id={'registerSubmit'}
						type={'submit'}>
						Submit
					</MainButton>
				</AuthFormContainerStyled>
			</Form>
			)}
		</Formik>
	)
}