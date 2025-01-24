import Grid from '@mui/material/Grid2';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';

function InnerBlockContacts() {
    const gridSize = {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
    }

    return (
        <Grid container spacing={2}>
            <Grid size={gridSize}>
                <Card variant="soft">
                    <Link href="mailto:daniil@dybka.ru" overlay sx={{ justifyContent: 'center' }}>
                        daniil@dybka.ru
                    </Link>
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft">
                    <Link href="//ddybka.t.me" target="_blank" overlay sx={{ justifyContent: 'center' }}>
                        ddybka.t.me
                    </Link>
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft">
                    <Link href="//github/DanyaBooba" target="_blank" overlay sx={{ justifyContent: 'center' }}>
                        github/DanyaBooba
                    </Link>
                </Card>
            </Grid>
        </Grid>
//        <>
//            <
//            {/*daniil@dybka.ru*/}
//            {/*ddybka.t.me*/}
//            {/*github/DanyaBooba*/}
//        </>
    )
}

export default InnerBlockContacts;