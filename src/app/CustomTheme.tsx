'use client'
import { ThemeProvider } from 'styled-components'
import { getTheme, themes } from '@/themes'
import { FC, ReactNode } from 'react'

interface CustomThemeProps {
    children: ReactNode
}

export const CustomTheme: FC<CustomThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={getTheme()}>
            {children}
        </ThemeProvider>
    )
}
