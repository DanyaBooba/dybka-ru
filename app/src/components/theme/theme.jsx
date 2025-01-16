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
                    body: '#f4f6f7',
//                    surface: '#ffffff'
                },
                showBlock: {
                    borderColor: 'rgba(210, 219, 227, .5)',
                    backgroundColor: '#ffffff',
                    boxShadow: 'inset 0 -1px 0 0 rgba(47,43,67,.1),0 1px 3px 0 rgba(47,43,67,.1)'
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
                showBlock: {
                    borderColor: 'rgba(44, 81, 86, .5)',
                    backgroundColor: '#244448',
                    boxShadow: '',
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
