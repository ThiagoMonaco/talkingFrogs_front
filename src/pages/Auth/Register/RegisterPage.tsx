'use client'

import React, { useState } from 'react'
import { AuthContainerStyled, AuthErrorMessageStyled, AuthTitleStyled } from '../styles'
import { RegisterForm } from '@/pages/Auth/Register/RegisterForm'
import { getTheme } from '@/themes'
import { UnderlinedButton } from '@/components'
import { useRouter } from 'next/navigation'
import { setErrorMap } from 'zod'

export default function RegisterPage() {
    const router = useRouter()
    const [isUnmounting, setIsUnmounting] = useState(false)
    const [error, setError] = useState('')

    const redirectToLogin = async () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push('/auth/login')
        }, 250)
    }

    return (
        <AuthContainerStyled className={'animation-delay'}  isUnmounting={isUnmounting}>
            <AuthTitleStyled> Register </AuthTitleStyled>
            <RegisterForm setError={setError}/>
            {error !== '' && <AuthErrorMessageStyled> {error} </AuthErrorMessageStyled>}
            <UnderlinedButton id={'alreadyHaveAccountBtn'} onClick={redirectToLogin} color={getTheme().colors.black}>
                Already have an account? Login
            </UnderlinedButton>
        </AuthContainerStyled>
    )
}