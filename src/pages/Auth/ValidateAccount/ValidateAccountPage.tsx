'use client'

import { AuthContainerStyled, AuthTitleStyled } from '@/pages/Auth/styles'
import React, { useContext, useEffect, useState } from 'react'
import { TextContainerStyled } from '@/pages/Auth/ValidateAccount/styles'
import { ValidateAccountForm } from '@/pages/Auth/ValidateAccount/ValidateAccountForm'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import { UnderlinedButton } from '@/components'
import api from '@/infra/api/api'

export const ValidateAccountPage = () => {
    const router = useRouter()
    const { isLogged, userData } = useContext(UserContext)
    const [isUnmounting, setIsUnmounting] = useState(false)

    useEffect(() => {
        if(!isLogged) {
            setIsUnmounting(true)
            router.push('/auth/login')
        }
    }, [isLogged])

    const handleResendVerificationCode = async () => {
        const { email } = userData
        if(!email) {
            return
        }
        await api.resendEmailToken({ email })
    }

    return (
        <AuthContainerStyled isUnmounting={isUnmounting}>
            <AuthTitleStyled> Activate Account </AuthTitleStyled>
            <TextContainerStyled>
                We send a verification code to <b>{userData.email}</b>
            </TextContainerStyled>
            <ValidateAccountForm/>
            <UnderlinedButton onClick={handleResendVerificationCode} id={'resend-verification-code'}>
                Resend verification code
            </UnderlinedButton>
        </AuthContainerStyled>
    )
}