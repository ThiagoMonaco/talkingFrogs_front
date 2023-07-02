import { FC, ReactNode } from 'react'
import { ButtonChildrenStyled, MainButtonStyled } from '@components/MainButton/styles'
import { Loading } from '@/components'

interface MainButtonProps {
    children: ReactNode
    id: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    isLoading?: boolean
}

export const MainButton: FC<MainButtonProps> = ({
    children,
    disabled = false,
    id,
    onClick,
    type,
    isLoading = false,
    ...props }) => {

    return (
        <MainButtonStyled
            isLoading={isLoading}
            disabled={disabled || isLoading}
            type={type}
            onClick={onClick}
            id={id} {...props} >
            <ButtonChildrenStyled isLoading={isLoading}>
                {children}
            </ButtonChildrenStyled>
            {isLoading ? <Loading /> : ''}
        </MainButtonStyled>
    )
}