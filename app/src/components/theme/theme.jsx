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
//                    surface: '#e3effb'
                },
                header: {
                    borderColor: 'rgba(210, 219, 227, .5)',
                    backgroundColor: 'rgba(255, 255, 255, .8)',
                    boxShadow: 'inset 0 -1px 0 0 rgba(47,43,67,.1),0 1px 3px 0 rgba(47,43,67,.1)'
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
                    surface: '#2b4c50',
                    popup: '#142735'
                },
                header: {
                    borderColor: '#254b4c',
                    backgroundColor: 'rgba(29, 54, 57, .93)',
                    boxShadow: '',
                },
                showBlock: {
                    borderColor: 'rgba(29, 56, 60, .5)',
                    backgroundColor: '#182f32',
                    boxShadow: '',
                },
                neutral: {
                    800: "#223f43"
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