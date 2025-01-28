import Grid from '@mui/material/Grid2';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import {smiMainPage} from '../../../data/smi/smi';

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
                    <Card variant="soft">
                        <Link href={item.link} overlay sx={{
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  width: '100%',
                              }}>
                            {item.title}
                        </Link>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockSMI;