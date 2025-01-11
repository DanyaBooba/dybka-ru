import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { theme, currentTheme } from './theme'

function AppTheme({ children }) {
    document.querySelector("meta[name='theme-color']").setAttribute('content', currentTheme().head.themeColor)
    
    return (
        <CssVarsProvider theme={theme} defaultMode='system'>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    )
}

export default AppTheme