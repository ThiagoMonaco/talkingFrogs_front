import { Form, Formik, FormikProps } from 'formik'
import Input from '@components/Input/Input.component'
import { InputFormContainerStyled } from '@/pages/Auth/Register/RegisterForm/styles'
import React from 'react'
import { validateEmailPattern, validateLength } from '@/helpers/validations'
import { MainButton } from '@/components'


interface LoginFormData {
    email: string
    password: string
}

export const LoginForm = () => {
    const initialValues: LoginFormData = {
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
        console.log(values)
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

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {(props: FormikProps<LoginFormData>) =>(
                <Form>
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
                    <MainButton id={'login-submit'} type={'submit'}> Submit </MainButton>
                </Form>
            )}
        </Formik>
    )

}