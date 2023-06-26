'use client'
import { FC, ReactNode } from 'react'
import { registerFrog } from '@images/index'
import { getTheme } from '@/themes'
import { FullScreenBanner } from '@/components'
import { AuthTitleStyled } from '@/app/auth/styles'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {

    return (
        <FullScreenBanner
            image={registerFrog.src}
            alt={'Frog'}
            color={getTheme().register.bannerBackground}
            side={'right'}>
            <AuthTitleStyled> Register </AuthTitleStyled>
            {children}
        </FullScreenBanner>
    )
}

export default AuthLayout