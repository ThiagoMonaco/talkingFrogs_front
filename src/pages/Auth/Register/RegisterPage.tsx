'use client'

import React from 'react'
import { AuthContainerStyled, AuthTitleStyled } from '../styles'
import RegisterForm from '@/pages/Auth/Register/RegisterForm/RegisterForm'
import { getTheme } from '@/themes'
import { UnderlinedButton } from '@/components'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const router = useRouter()
    const [isUnmounting, setIsUnmounting] = React.useState(false)

    const redirectToLogin = async () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push('/auth/login')
        }, 250)
    }

    return (
        <AuthContainerStyled isUnmounting={isUnmounting}>
            <AuthTitleStyled> Register </AuthTitleStyled>
            <RegisterForm />
            <UnderlinedButton id={'alreadyHaveAccountBtn'} onClick={redirectToLogin} color={getTheme().colors.black}>
                Already have an account? Login
            </UnderlinedButton>
        </AuthContainerStyled>
    )
}