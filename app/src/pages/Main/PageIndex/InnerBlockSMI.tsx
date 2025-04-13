import Grid from '@mui/material/Grid2'
import Link from '@mui/joy/Link'
import { smiMainPage } from '../../../data/smi/smi'

function InnerBlockSMI() {
    const gridSize = {
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12
    }

    return (
        <Grid container spacing={2}>
            {smiMainPage.map((item, index) => (
                <Grid size={gridSize} key={index}>
                    <Link href={item.link} variant="soft" className="linkBorder" sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        py: '16px !important',
                    }}>
                        {item.title}
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockSMI;
