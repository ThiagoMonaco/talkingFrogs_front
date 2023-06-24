'use client'

import React from 'react'
import { RegisterContainerStyled, RegisterFormStyled, RegisterTitleStyled } from './styles'
import FullScreenBanner from '@components/FullScreenBanner/FullScreenBanner.component'
import { registerFrog } from '@images/index'
import RegisterForm from '@/pages/register/registerForm/RegisterForm'
import { getTheme } from '@/themes'

export default function RegisterPage() {

    return (
        <>
            <FullScreenBanner
                image={registerFrog.src}
                alt={'Frog'}
                color={getTheme().register.bannerBackground}
                side={'right'}>
                <RegisterContainerStyled>
                    <RegisterTitleStyled> Register </RegisterTitleStyled>
                    <RegisterForm />
                </RegisterContainerStyled>
            </FullScreenBanner>
        </>
    )
}