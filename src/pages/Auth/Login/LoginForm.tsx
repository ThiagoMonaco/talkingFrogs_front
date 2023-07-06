import { Form, Formik, FormikProps } from 'formik'
import React, { FC, useContext, useState } from 'react'
import { formHasError, validateEmailPattern, validateLength } from '@/helpers/validations'
import { MainButton, Input } from '@/components'
import api from '@/infra/api/api'
import { AuthFormContainerStyled, AuthInputFormContainerStyled } from "@/pages/Auth/styles"
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext'

interface LoginFormData {
    email: string
    password: string
}

interface LoginFormProps {
    setError: (error: string) => void
}

export const LoginForm: FC<LoginFormProps> = ({ setError }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { setIsLogged, setUserData} = useContext(UserContext)

    const initialValues: LoginFormData = {
        email: '',
        password: ''
    }

    const onSubmit = async(values) => {
        setIsLoading(true)
        setError('')
        const res = await api.login({
            email: values.email,
            password: values.password
        })

        const { data, status} = res
        if(status === 401) {
            setIsLoading(false)
            setError('Invalid email or password')
            return
        }

        if (status !== 200) {
            setIsLoading(false)
            setError('Something went wrong on the server side, please try again later.')
            return
        }

        setIsLogged(true)
        setUserData({...data, email: values.email})

        if(!data.isEmailVerified) {
            await router.push('/auth/validate-account')
            return
        }

        await router.push('/')
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
                            type={'password'}
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