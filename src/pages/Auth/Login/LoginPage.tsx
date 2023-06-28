'use client'

import { FC } from 'react'
import { AuthContainerStyled, AuthTitleStyled } from '@/pages/Auth/styles'
import { LoginForm } from '@/pages/Auth/Login/LoginForm/LoginForm'
import { UnderlinedButton } from '@/components'
import { useRouter } from 'next/navigation'

export const LoginPage: FC = () => {
    const router = useRouter()

    const redirectToRegister = async () => {
        await router.push('/auth/register')
    }

    return (
        <AuthContainerStyled>
            <AuthTitleStyled> Login </AuthTitleStyled>
            <LoginForm />
            <UnderlinedButton onClick={redirectToRegister} id={'newHereBtn'} > New here? Create a account!</UnderlinedButton>
        </AuthContainerStyled>
    )
}