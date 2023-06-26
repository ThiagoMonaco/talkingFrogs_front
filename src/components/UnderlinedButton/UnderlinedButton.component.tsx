import { FC, ReactNode } from 'react'
import { UnderlinedButtonStyled } from '@components/UnderlinedButton/styles'

interface UnderlinedButtonComponentProps {
    children: ReactNode
    color?: string
    onClick?: () => void
}

export const UnderlinedButton: FC<UnderlinedButtonComponentProps> = ({ children, color, onClick, ...rest }) => {
    return (
        <UnderlinedButtonStyled onClick={onClick} color={color} {...rest}>
            {children}
        </UnderlinedButtonStyled>
    )
}