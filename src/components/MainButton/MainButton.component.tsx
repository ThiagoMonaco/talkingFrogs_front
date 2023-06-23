import { FC, ReactNode } from 'react'
import { MainButtonStyled } from '@components/MainButton/styles'

interface MainButtonProps {
    children: ReactNode
    id: string
}

export const MainButton: FC<MainButtonProps> = ({ children, id, ...rest }) => {
    return (
        <MainButtonStyled id={id} {...rest} >
            {children}
        </MainButtonStyled>
    )
}