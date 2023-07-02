import { Form, Formik, FormikProps } from 'formik'
import { InputFormContainerStyled, LoginFormStyled } from './styles'
import React, { useState } from 'react'
import { formHasError, validateEmailPattern, validateLength } from '@/helpers/validations'
import { MainButton, Input } from '@/components'
import api from '@/infra/api/api'


interface LoginFormData {
    email: string
    password: string
}

export const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const initialValues: LoginFormData = {
        email: '',
        password: ''
    }

    const onSubmit = async(values) => {
        setIsLoading(true)
        const res = await api.login({
            email: values.email,
            password: values.password
        })
        setIsLoading(false)
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
                    <MainButton
                        isLoading={isLoading}
                        disabled={formHasError(props.errors)}
                        id={'loginSubmit'}
                        type={'submit'}>
                        Submit
                    </MainButton>
                </LoginFormStyled>
            </Form>
            )}
        </Formik>
    )

}