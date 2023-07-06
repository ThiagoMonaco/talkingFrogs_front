import React, { FC, useContext, useState } from 'react'
import {Form, Formik, FormikProps} from "formik"
import { AuthFormContainerStyled, AuthInputFormContainerStyled } from "@/pages/Auth/styles"
import {Input, MainButton} from "@/components"
import {formHasError} from "@/helpers/validations";
import api from '@/infra/api/api'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext'

interface ValidateAccountFormData {
    code: string
}

interface ValidateAccountFormProps {
    setError: (error: string) => void
}

export const ValidateAccountForm: FC<ValidateAccountFormProps> = ({ setError }) => {
    const router = useRouter()
    const { logoffUser } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const initialValues: ValidateAccountFormData = {
        code: ''
    }

    const onSubmit = async (values: ValidateAccountFormData) => {
        setIsLoading(true)
        const response = await api.validateEmailToken({token: values.code})
        if(response.status === 200) {
            router.push('/')
            return
        }

        if(response.status === 403) {
            logoffUser()
            router.push('/auth/login')
            return
        }

        if(response.status === 400) {
            setError(response.data.error)
            setIsLoading(false)
            return
        }

        setError('An error occurred on the server side. Please try again later.')
        setIsLoading(false)
    }

    const validateAccountCodeInputValidation = (value: string) => {
        if (value.length === 0) {
            return 'Code required'
        }

        return ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            isInitialValid={true}
        >
            {(props: FormikProps<ValidateAccountFormData>) => (
            <Form>
                <AuthFormContainerStyled>
                    <AuthInputFormContainerStyled>
                        <Input
                            id={'validate-account-code'}
                            name={'code'}
                            label={'Verification code'}
                            validateOnBlur={true}
                            validate={validateAccountCodeInputValidation}
                        />
                    </AuthInputFormContainerStyled>
                    <MainButton
                        isLoading={isLoading}
                        disabled={formHasError(props.errors)}
                        id={'validateAccountSubmit'}
                        type={'submit'}>
                        Submit
                    </MainButton>
                </AuthFormContainerStyled>
            </Form>
            )}
        </Formik>
    )
}