import { FC, ReactNode } from 'react'
import { UnderlinedButtonStyled } from '@components/UnderlinedButton/styles'

interface UnderlinedButtonComponentProps {
    children: ReactNode
    color?: string
}

export const UnderlinedButton: FC<UnderlinedButtonComponentProps> = ({ children, color, ...rest }) => {
    return (
        <UnderlinedButtonStyled color={color} {...rest}>
            {children}
        </UnderlinedButtonStyled>
    )
}