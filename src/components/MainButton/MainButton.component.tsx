import { FC, ReactNode } from 'react'
import { MainButtonStyled } from '@components/MainButton/styles'

interface MainButtonProps {
    children: ReactNode
    id: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export const MainButton: FC<MainButtonProps> = ({ children, disabled = false,id, onClick, type, ...props }) => {

    console.log(disabled)

    return (
        <MainButtonStyled disabled={disabled} type={type} onClick={onClick} id={id} {...props} >
            {children}
            {disabled && <div className={'loader'}></div>}
        </MainButtonStyled>
    )
}