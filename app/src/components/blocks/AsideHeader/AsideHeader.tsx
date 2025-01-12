import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/joy/Link';

function LeftAsideHeader({list}) {
    return (
        <>
            {list.map((item, index) => (
                <div>
                    <Link href={item.link} key={index}>
                        {item.name}
                    </Link>
                </div>
            ))}
        </>
    )
}

function AsideHeader({children}) {
    const leftHeader = [
        {
            name: '123',
            link: '/123',
        },
        {
            name: '123',
            link: '/123',
        },
        {
            name: '123',
            link: '/123',
        },
    ]

    return (
        <Container maxWidth="false" sx={{
                       px: '0 !important'
                   }}>
            <Grid container>
                <Grid size={1}>
                    <Box sx={{
                             position: {
                                 lg: 'fixed'
                             },
                             height: {
                                 lg: '100vh'
                             },
                             borderRight: {
                                 lg: '1px solid #123123'
                             },
                             px: {
                                 lg: '2rem'
                             },
                             pt: {
                                 lg: '1rem'
                             }
                         }}>
                        <LeftAsideHeader list={leftHeader} />
                    </Box>
                </Grid>
                <Grid size={11}>
                    <Container maxWidth="md" sx={{
                                   mt: {
                                       lg: '1rem',
                                       md: '1rem',
                                       sm: '.5rem',
                                       xs: '.5rem',
                                   },
                                   pl: {
                                       lg: '120px',
                                       md: '120px',
                                   }
                               }}>
                        {children}
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AsideHeader;