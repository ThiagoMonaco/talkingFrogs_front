import { FC } from 'react'
import { LogoImage } from '@images/index'
import { LogoStyled, LogoTextStyled } from '@components/Logo/styles'
import { useRouter } from 'next/navigation'

interface LogoProps {
    onClick?: () => void
}

export const Logo :FC<LogoProps> = ({onClick = () => {}}) => {
    const router = useRouter()

    const handleClick = async () => {
        await onClick()
        router.push('/')
    }

    return (
            <LogoStyled onClick={handleClick} className={'animation-delay'}>
                <LogoImage />
                <LogoTextStyled>
                    Talking <br/>
                    Frogs
                </LogoTextStyled>
            </LogoStyled>
        )
}