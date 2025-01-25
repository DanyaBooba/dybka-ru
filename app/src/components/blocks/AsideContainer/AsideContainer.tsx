import Container from '@mui/material/Container';
import Header from '../../includes/Header/Header'
import Footer from '../../includes/Footer/Footer'

function AsideContainer({children}) {
    return (
        <>
            <Header />
            <Container maxWidth="md" className="container" sx={{ minHeight: 'calc(100vh - 85px - 2rem)' }}>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default AsideContainer;