'use client'

import { FC } from 'react'
import { AuthContainerStyled, AuthTitleStyled } from '@/pages/Auth/styles'
import { LoginForm } from '@/pages/Auth/Login/LoginForm/LoginForm'

export const LoginPage: FC = () => {
    return (
        <AuthContainerStyled>
            <AuthTitleStyled> Login </AuthTitleStyled>
            <LoginForm />

        </AuthContainerStyled>
    )
}