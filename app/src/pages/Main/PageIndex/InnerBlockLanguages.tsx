import Grid from '@mui/material/Grid2';
import Card from '@mui/joy/Card';

function InnerBlockLanguages() {
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
                    C++
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    JavaScript
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    TypeScript
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    HTML5
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    CSS3
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    PHP
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    Markdown
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    Python
                </Card>
            </Grid>
            <Grid size={gridSize}>
                <Card variant="soft" sx={{ textAlign: 'center' }}>
                    Java
                </Card>
            </Grid>
        </Grid>
    )
}

export default InnerBlockLanguages;