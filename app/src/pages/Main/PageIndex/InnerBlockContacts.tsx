import Grid from '@mui/material/Grid2'
import Link from '@mui/joy/Link'

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
                <Link href="mailto:daniil@dybka.ru" variant="soft" className="linkBorder" sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    py: '16px !important',
                    justifyContent: 'center',
                }}>
                    daniil@dybka.ru
                </Link>
            </Grid>
            <Grid size={gridSize}>
                <Link href="//ddybka.t.me" target="_blank" variant="soft" className="linkBorder" sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    py: '16px !important',
                    justifyContent: 'center',
                }}>
                    ddybka.t.me
                </Link>
            </Grid>
            <Grid size={gridSize}>
                <Link href="//github.com/DanyaBooba" target="_blank" variant="soft" className="linkBorder" sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    py: '16px !important',
                    justifyContent: 'center',
                }}>
                    github.com/DanyaBooba
                </Link>
            </Grid>
        </Grid>
    )
}

export default InnerBlockContacts;
