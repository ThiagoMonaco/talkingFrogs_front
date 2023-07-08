'use client'

import { FC, useContext, useState } from 'react'
import {
    HomeAuthButtonsContainerStyled,
    HomeContainerStyled,
    HomeContentContainerStyled,
    HomeSubTitleStyled
} from '@/pages/Home/styles'
import { Logo, UnderlinedButton } from '@/components'
import { SearchUserForm } from '@/pages/Home/SearchUserForm'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

export const HomePage:FC = () => {
    const router = useRouter()
    const { isLogged, userData } = useContext(UserContext)
    const [isUnmounting, setIsUnmounting] = useState(false)

    const redirectToUserProfile = () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push(`/user/${userData.name}`)
        }, 750)
    }

    const redirectToLogin = () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push('/auth/login')
        }, 750)
    }

    const redirectToSignup = () => {
        setIsUnmounting(true)
        setTimeout(() => {
            router.push('/auth/register')
        }, 750)
    }

    return (
        <HomeContainerStyled isUnmounting={isUnmounting}>
            <Logo textAnimationDelay={0.5}/>
            <HomeContentContainerStyled>
                <HomeSubTitleStyled>
                    Ask anything to your friends!
                </HomeSubTitleStyled>
                <SearchUserForm />
                <HomeSubTitleStyled>
                    or take a look at what they are asking you!
                </HomeSubTitleStyled>
                {isLogged ?
                    <UnderlinedButton
                        onClick={redirectToUserProfile}
                        size={'large'}
                        id={'redirectToProfileButton'}
                    >
                        My profile
                    </UnderlinedButton> :
                    <HomeAuthButtonsContainerStyled>
                        <UnderlinedButton
                            size={'large'}
                            id={'signUpButton'}
                            onClick={redirectToSignup}
                        >
                            Sign up
                        </UnderlinedButton>
                        <UnderlinedButton
                            size={'large'}
                            id={'signInButton'}
                            onClick={redirectToLogin}
                        >
                            Sign in
                        </UnderlinedButton>
                    </HomeAuthButtonsContainerStyled>
                }
            </HomeContentContainerStyled>
        </HomeContainerStyled>
    );
}