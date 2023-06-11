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
import RegisterForm from '@/pages/register/registerForm/RegisterForm'

export default function RegisterPage() {

    return (
        <>
            <FullScreenBanner
                image={registerFrog.src}
                alt={'Frog'}
                color={colors.lightGreen}
                side={'right'}>
                <RegisterContainerStyled>
                    <RegisterTitleStyled> Register </RegisterTitleStyled>
                    <RegisterForm />
                </RegisterContainerStyled>
            </FullScreenBanner>
        </>
    )
}