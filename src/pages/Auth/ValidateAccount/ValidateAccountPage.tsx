'use client'

import { AuthContainerStyled, AuthTitleStyled } from '@/pages/Auth/styles'
import React from 'react'
import { TextContainerStyled } from '@/pages/Auth/ValidateAccount/styles'
import { ValidateAccountForm } from '@/pages/Auth/ValidateAccount/ValidateAccountForm'

export const ValidateAccountPage = () => {

    return (
        <AuthContainerStyled isUnmounting={false}>
            <AuthTitleStyled> Activate Account </AuthTitleStyled>
            <TextContainerStyled>
                We send a verification code to <b>hihuhsssssssipokemon@gmail.com</b>
            </TextContainerStyled>
            <ValidateAccountForm/>
        </AuthContainerStyled>
    )
}