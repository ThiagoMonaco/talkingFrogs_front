import { Form, Formik, FormikProps } from 'formik'
import React, { useState } from 'react'
import { formHasError, validateEmailPattern, validateLength } from '@/helpers/validations'
import { MainButton, Input } from '@/components'
import api from '@/infra/api/api'
import { AuthFormContainerStyled, AuthInputFormContainerStyled } from "@/pages/Auth/styles"


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
                <AuthFormContainerStyled>
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
                            validate={formPasswordValidate}
                            validateOnBlur
                        />
                    </AuthInputFormContainerStyled>
                    <MainButton
                        isLoading={isLoading}
                        disabled={formHasError(props.errors)}
                        id={'loginSubmit'}
                        type={'submit'}>
                        Submit
                    </MainButton>
                </AuthFormContainerStyled>
            </Form>
            )}
        </Formik>
    )

}