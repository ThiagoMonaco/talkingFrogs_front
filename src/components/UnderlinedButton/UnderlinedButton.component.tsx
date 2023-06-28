import { FC, ReactNode } from 'react'
import { UnderlinedButtonStyled } from '@components/UnderlinedButton/styles'

interface UnderlinedButtonComponentProps {
    id: string
    children: ReactNode
    color?: string
    onClick?: () => void
}

export const UnderlinedButton: FC<UnderlinedButtonComponentProps> = ({ id, children, color, onClick, ...rest }) => {
    return (
        <UnderlinedButtonStyled id={id} onClick={onClick} color={color} {...rest}>
            {children}
        </UnderlinedButtonStyled>
    )
}