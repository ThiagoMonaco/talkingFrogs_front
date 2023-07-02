import { FC } from 'react'
import { LoadingStyled } from '@components/Loading/styles'
import { getTheme } from '@/themes'

interface LoadingProps {
    backgroundColor?: string
    color?: string
    size?: number
}

export const Loading: FC<LoadingProps> = ({
    size = 30,
    backgroundColor = getTheme().colors.black,
    color = getTheme().colors.lightGreen}) => {

    return (
        <LoadingStyled size={size} backgroundColor={backgroundColor} color={color} />
    )
}