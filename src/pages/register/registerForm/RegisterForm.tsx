'use client'

import { Form, Formik, FormikProps } from 'formik'
import Input from '@components/Input/Input.component'
import React from 'react'
import { validateEmailPattern, validateLength, validatePassword, validateUsername } from '@/helpers/validations'
import api from '@/infra/api/api'
import { MainButtonStyled } from '@components/MainButton/styles'
import { InputFormContainerStyled, RegisterFormStyled } from '@/pages/register/registerForm/styles'


interface RegisterFormData {
	username: string
	email: string
	password: string
	confirmPassword: string
}

export default function RegisterForm () {
	const initialValues: RegisterFormData = {
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	}

	const onSubmit = async (values: RegisterFormData) => {
		const response = await api.createAccount({
			name: values.username,
			email: values.email,
			password: values.password,
			passwordConfirmation: values.confirmPassword,
		})

		console.log(response)
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
				<RegisterFormStyled>
					<InputFormContainerStyled>
						<Input
							id={'username'}
							name={'username'}
							label={'Username'}
							validate={formValidateUsername}
							validateOnBlur
						/>
					</InputFormContainerStyled>

					<InputFormContainerStyled>
						<Input
							id={'email'}
							name={'email'}
							label={'Email'}
							validate={formValidateEmail}
							validateOnBlur
						/>
					</InputFormContainerStyled>

					<InputFormContainerStyled>
						<Input
							id={'password'}
							name={'password'}
							label={'Password'}
							validate={formValidatePassword}
							validateOnBlur
						/>
					</InputFormContainerStyled>

					<InputFormContainerStyled>
						<Input
							id={'confirmPassword'}
							name={'confirmPassword'}
							label={'Password confirmation'}
							validate={(value) => formValidateConfirmPassword(value, props.values.password)}
							validateOnBlur
						/>
					</InputFormContainerStyled>
					<MainButtonStyled id={'register-submit'} type={'submit'}> Submit </MainButtonStyled>
				</RegisterFormStyled>
			</Form>
			)}
		</Formik>
	)
}