import Container from '@mui/material/Container';
import Header from '../../includes/Header/Header'
import Footer from '../../includes/Footer/Footer'
//import Link from '@mui/joy/Link';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function AsideContainer({needBack="", children}) {
    return (
        <>
            <Header />
            <Container maxWidth="md" className="container" sx={{ minHeight: 'calc(100vh - 85px - 2rem)' }}>
                {/*{!!needBack && (*/}
                {/*    <Link href="/" variant="soft" aria-label="Вернуться на главную" startDecorator={<ChevronLeftIcon />} sx={{ mb: '1rem' }}>*/}
                {/*        Вернуться на главную*/}
                {/*    </Link>*/}
                {/*)}*/}
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default AsideContainer;