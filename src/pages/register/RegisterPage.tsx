'use client'

import React from 'react'
import { RegisterContainerStyled, RegisterFormStyled, RegisterTitleStyled } from './styles'
import FullScreenBanner from '@components/FullScreenBanner/FullScreenBanner.component'
import { registerFrog } from '@images/index'
import { colors } from '@/helpers/ui/colors'
import {Form, Formik, useFormik} from 'formik'
import Input from '@components/Input/Input.component'
import { validateUsername, validateEmailPattern, validateLength, validatePassword } from '@/helpers/validations'
import { log } from 'util'

interface RegisterFormData {
    username: string
    email: string
    password: string
    confirmPassword: string
}

export default function RegisterPage() {
    const initialValues: RegisterFormData = {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    }

    const onSubmit = (values: RegisterFormData) => {
        console.log(values)
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


    return (
        <>
            <FullScreenBanner
                image={registerFrog.src}
                alt={'Frog'}
                color={colors.lightGreen}
                side={'right'}>
                <RegisterContainerStyled>
                    <RegisterTitleStyled> Register </RegisterTitleStyled>
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        validateOnChange={false}
                        validateOnBlur={true}
                    >
                        <Form>
                            <Input
                                id={'username'}
                                name={'username'}
                                label={'Username'}
                                validate={formValidateUsername}
                            />

                            <Input
                                id={'email'}
                                name={'email'}
                                label={'Email'}
                                validate={formValidateEmail}
                            />

                            <Input
                                id={'password'}
                                name={'password'}
                                label={'Password'}
                                validate={formValidatePassword}
                            />

                            <Input
                                id={'confirmPassword'}
                                name={'confirmPassword'}
                                label={'Password confirmation'}
                            />
                        <button type={'submit'}> Submit </button>
                        </Form>
                    </Formik>
                </RegisterContainerStyled>
            </FullScreenBanner>
        </>
    )
}