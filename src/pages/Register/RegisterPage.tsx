'use client'

import React from 'react'
import { RegisterContainerStyled, RegisterTitleStyled } from './styles'
import RegisterForm from '@/pages/Register/RegisterForm/RegisterForm'
import { getTheme } from '@/themes'
import { UnderlinedButton } from '@/components'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const router = useRouter()

    const redirectToLogin = async () => {
        await router.push('/auth/login')
    }

    return (
        <RegisterContainerStyled>
            <RegisterTitleStyled> Register </RegisterTitleStyled>
            <RegisterForm />`
            <UnderlinedButton onClick={redirectToLogin} color={getTheme().colors.black}>
                Already have an account? Login
            </UnderlinedButton>
        </RegisterContainerStyled>
    )
}