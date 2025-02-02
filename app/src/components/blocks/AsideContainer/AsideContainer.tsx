import Container from '@mui/material/Container';
import Header from '../../includes/Header/Header'
import Footer from '../../includes/Footer/Footer'

function AsideContainer({ hasSearch="", children }) {
    return (
        <>
            <Header />
            <Container maxWidth="md" className={`container ${hasSearch && 'container-mobile-search'}`} sx={{ minHeight: 'calc(100vh - 85px - 2rem)' }}>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default AsideContainer;