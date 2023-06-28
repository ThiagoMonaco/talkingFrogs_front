import { Form, Formik, FormikProps } from 'formik'
import { InputFormContainerStyled, LoginFormStyled } from './styles'
import React from 'react'
import { validateEmailPattern, validateLength } from '@/helpers/validations'
import { MainButton, Input } from '@/components'
import api from '@/infra/api/api'


interface LoginFormData {
    email: string
    password: string
}

export const LoginForm = () => {
    const initialValues: LoginFormData = {
        email: '',
        password: ''
    }

    const onSubmit = async(values) => {
        console.log(values)

        const res = await api.login({
            email: values.email,
            password: values.password
        })

        console.log(res)
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

    const formPasswordValidate = (password: string) => {
        if (!validateLength(password)) {
            return 'Password required'
        }

        return ''
    }

    const hasError = (errors) => {
         return Object.keys(errors).some((key) => errors[key] !== '')
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={false}
            isInitialValid={true}
        >
            {(props: FormikProps<LoginFormData>) => (
            <Form>
                <LoginFormStyled>
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
                            validate={formPasswordValidate}
                            validateOnBlur
                        />
                    </InputFormContainerStyled>
                    <MainButton disabled={hasError(props.errors)} id={'loginSubmit'} type={'submit'}> Submit </MainButton>
                </LoginFormStyled>
            </Form>
            )}
        </Formik>
    )

}