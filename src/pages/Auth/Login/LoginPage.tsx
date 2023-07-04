'use client'

import { FC, useState } from 'react'
import { AuthContainerStyled, AuthTitleStyled } from '@/pages/Auth/styles'
import { LoginForm } from '@/pages/Auth/Login/LoginForm'
import { UnderlinedButton } from '@/components'
import { useRouter } from 'next/navigation'

export const LoginPage: FC = () => {
    const router = useRouter()
    const [isUnmounting, setIsUnmounting] = useState(false)

    const redirectToRegister = async () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push('/auth/register')
        }, 250)
    }

    return (
        <AuthContainerStyled isUnmounting={isUnmounting}>
            <AuthTitleStyled> Login </AuthTitleStyled>
            <LoginForm />
            <UnderlinedButton onClick={redirectToRegister} id={'newHereBtn'} > New here? Create a account!</UnderlinedButton>
        </AuthContainerStyled>
    )
}