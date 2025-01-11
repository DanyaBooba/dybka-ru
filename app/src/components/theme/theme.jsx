import { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { extendTheme } from '@mui/joy/styles'

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                head: {
                    themeColor: '#ffffff'
                },
                background: {
                    body: '#FFFFFF',
                },
                header: {
                    borderColor: 'hsla(220, 20%, 80%, 0.4)',
                    backgroundColor: 'rgba(252, 252, 252, 0.8)',
                    boxShadow: 'rgba(9, 11, 17, 0.03) 0px 4px 8px 0px, rgba(19, 23, 32, 0.03) 0px 7px 4px -5px',
                },
            },
        },
        dark: {
            palette: {
                head: {
                    themeColor: '#0f2324'
                },
                background: {
                    body: '#0f2324',
                    surface: '#12212d',
                    popup: '#142735'
                },
                header: {
                    borderColor: 'rgba(92, 114, 133, 0.4)',
                    backgroundColor: 'rgba(14, 26, 36, 0.8)',
                    boxShadow: 'hsla(220, 60%, 70%, 0.03) 0px 4px 8px 0px, hsla(220, 55%, 75%, 0.03) 0px 7px 4px -5px',
                },
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
