import { useEffect } from 'react'
import Container from '@mui/material/Container';
import Header from '../includes/Header/Header'
import Footer from '../includes/Footer/Footer'

function AsideContainer({ hasSearch = "", title = "Даниил Дыбка — разработчик веб-платформ, игр и мобильных приложений", desc = "Даниил Дыбка — разработчик веб-платформ, игр и мобильных приложений", children }) {
    useEffect(() => {
        document.title = title
        document.querySelector('head meta[name="description"]')?.setAttribute('content', desc)
    })

    return (
        <>
            <Header />
            <Container maxWidth="md" className={`container ${hasSearch && 'container-mobile-search'}`}
                sx={{ minHeight: 'calc(100vh - 85px - 2rem)' }}>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default AsideContainer;
