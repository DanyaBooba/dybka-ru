import Container from '@mui/material/Container';
import Header from '../../includes/Header/Header'
import Footer from '../../includes/Footer/Footer'

function AsideContainer({children}) {
    return (
        <>
            <Header />
            <Container maxWidth="md" className="container">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default AsideContainer;