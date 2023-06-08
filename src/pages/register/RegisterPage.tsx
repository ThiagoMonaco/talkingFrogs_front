'use client'

import React from 'react'
import { RegisterContainerStyled, RegisterTitleStyled } from './styles'
import FullScreenBanner from '@components/FullScreenBanner/FullScreenBanner.component'
import { registerFrog } from '@images/index'
import { colors } from '@/helpers/ui/colors'
import { useFormik } from 'formik'
import Input from '@components/Input/Input.component'
import { validateUsername, validateEmailPattern, validateLength } from '@/helpers/validations'

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

    const getUsernameErrorMessage = (username: string) => {
        if (!validateUsername(username)) {
            return 'Username required'
        }

        return ''
    }

    const getEmailErrorMessage = (email: string) => {
        if (!validateLength(email)) {
            return 'Email required'
        }

        if (!validateEmailPattern(email)) {
            return 'Invalid email'
        }

        return ''
    }

    const formik= useFormik({
        initialValues,
        onSubmit,
        validateOnChange: false,
        validate: (values) => {
            const errors: Partial<RegisterFormData> = {}

            errors.username = getUsernameErrorMessage(values.username)
            errors.email = getEmailErrorMessage(values.email)

            return errors
        },
    })

    return (
        <>
            <FullScreenBanner
                image={registerFrog.src}
                alt={'Frog'}
                color={colors.lightGreen}
                side={'right'}>
                <RegisterContainerStyled>
                    <RegisterTitleStyled> Register </RegisterTitleStyled>
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            id={'username'}
                            name={'username'}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            label={'Username'}
                            errorMessage={formik.errors.username}
                            onBlur={formik.handleBlur}
                        />

                        <Input
                            id={'email'}
                            name={'email'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            label={'Email'}
                            errorMessage={formik.errors.email}
                            onBlur={formik.handleBlur}
                        />

                        <Input
                            id={'password'}
                            name={'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            label={'Password'}
                            errorMessage={formik.errors.password}
                            onBlur={formik.handleBlur}
                        />

                        <Input
                            id={'confirmPassword'}
                            name={'confirmPassword'}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            label={'Password confirmation'}
                            errorMessage={formik.errors.confirmPassword}
                            onBlur={formik.handleBlur}
                        />
                        <button type={'submit'}> Submit </button>
                    </form>
                </RegisterContainerStyled>
            </FullScreenBanner>
        </>
    )
}