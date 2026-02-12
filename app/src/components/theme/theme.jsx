import { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { extendTheme } from '@mui/joy/styles'

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                head: {
                    themeColor: '#f4f6f7'
                },
                background: {
                    body: '#f4f6f7',
                },
                header: {
                    borderColor: 'rgba(210, 219, 227, .5)',
                    backgroundColor: 'rgba(255, 255, 255, .8)',
                    boxShadow: 'inset 0 -1px 0 0 rgba(47,43,67,.035),0 1px 3px 0 rgba(47,43,67,.085)'
                },
                navigate: {
                    svgFill: '#c7dff7',
                },
                showBlock: {
                    borderColor: 'rgba(210, 219, 227, .5)',
                    backgroundColor: '#ffffff',
                    boxShadow: 'inset 0 -1px 0 0 rgba(47,43,67,.035),0 1px 3px 0 rgba(47,43,67,.085)'
                },
            },
        },
        dark: {
            palette: {
                head: {
                    themeColor: '#1a1a1a'
                },
                background: {
                    body: '#1a1a1a',      // Темно-серый фон
                    surface: '#303030',   // Серый для поверхностей
                    popup: '#242424'      // Серый для попапов
                },
                header: {
                    borderColor: '#3a3a3a',
                    backgroundColor: '#242424cc',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
                },
                navigate: {
                    svgFill: '#c7dff7',
                },
                showBlock: {
                    borderColor: '#3a3a3a55',
                    backgroundColor: '#2a2a2a',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#303030',
                    900: '#1a1a1a',
                },
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            },
        },
    },
})

export const currentTheme = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])

    return theme.colorSchemes[mode].palette
}

export const infoTheme = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])

    return mode
}
