import { FC } from 'react'
import { LogoImage } from '@images/index'
import { LogoStyled, LogoTextStyled } from '@components/Logo/styles'
import { useRouter } from 'next/navigation'

interface LogoProps {
    onClick?: () => void
    textAnimationDelay?: number
}

export const Logo :FC<LogoProps> = ({
    onClick = () => {},
    textAnimationDelay = 1.5
    }) => {
    const router = useRouter()

    const handleClick = async () => {
        await onClick()
        router.push('/')
    }

    return (
            <LogoStyled onClick={handleClick} className={'animation-delay'}>
                <LogoImage />
                <LogoTextStyled textAnimationDelay={textAnimationDelay}>
                    Talking <br/>
                    Frogs
                </LogoTextStyled>
            </LogoStyled>
        )
}