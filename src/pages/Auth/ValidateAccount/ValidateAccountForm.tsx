import React, { FC } from "react"
import {Form, Formik, FormikProps} from "formik"
import { AuthFormContainerStyled, AuthInputFormContainerStyled } from "@/pages/Auth/styles"
import {Input, MainButton} from "@/components"
import {formHasError} from "@/helpers/validations";

interface ValidateAccountFormData {
    code: string
}

export const ValidateAccountForm: FC = () => {
    const initialValues: ValidateAccountFormData = {
        code: ''
    }

    const onSubmit = async (values: ValidateAccountFormData) => {
        console.log(values)
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
                        isLoading={false}
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