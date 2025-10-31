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
                    themeColor: '#142133'
                },
                background: {
                    body: '#142133',
                    surface: '#2b4364',
                    popup: '#142735'
                },
                header: {
                    borderColor: '#233752',
                    backgroundColor: '#233752cc',
                    boxShadow: '',
                },
                navigate: {
                    svgFill: '#c7dff7',
                },
                showBlock: {
                    borderColor: '#23375255',
                    backgroundColor: '#233752',
                    boxShadow: '',
                },
                neutral: {
                    800: "#2b4364",
                },
                primary: {
                    800: '#0a6bca'
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
