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
                        width: '100%',
                        py: '16px !important',
                        display: 'flex',
                    }}>
                        <span style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                        }}>
                            {item.title}
                        </span>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockSMI;
