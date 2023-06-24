import { defaultTheme } from '@/themes/default'

export const themes = {
    default: defaultTheme
}

export const getTheme = () => {
    const theme = process.env.THEME || 'default'
    return themes[theme] || themes.default
}