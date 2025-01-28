import Grid from '@mui/material/Grid2';
import Card from '@mui/joy/Card';

function InnerBlockTech() {
    const gridSize = {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
    }

    return (
        <Grid container spacing={2}>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    React
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    Laravel
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    Gulp
                </Card>
            </Grid>
        </Grid>
    )
}

export default InnerBlockTech;