import { FC, ReactNode } from 'react'
import { MainButtonStyled } from '@components/MainButton/styles'

interface MainButtonProps {
    children: ReactNode
    id: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

export const MainButton: FC<MainButtonProps> = ({ children, id, onClick, type, ...props }) => {
    return (
        <MainButtonStyled type={type} onClick={onClick} id={id} {...props} >
            {children}
        </MainButtonStyled>
    )
}