import { FC, ReactNode } from 'react'
import { UnderlinedButtonStyled } from '@components/UnderlinedButton/styles'

interface UnderlinedButtonComponentProps {
    id: string
    children: ReactNode
    color?: string
    onClick?: () => void
    size?: 'medium' | 'large'
}

export const UnderlinedButton: FC<UnderlinedButtonComponentProps> = ({
    id,
    children,
    color,
    onClick,
    size = 'medium',
    ...rest }) => {
    return (
        <UnderlinedButtonStyled
            id={id}
            onClick={onClick}
            color={color}
            size={size}
            {...rest}
        >
            {children}
        </UnderlinedButtonStyled>
    )
}