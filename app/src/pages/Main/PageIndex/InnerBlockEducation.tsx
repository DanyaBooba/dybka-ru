import Card from '@mui/joy/Card';
import Typography from "@mui/joy/Typography";

function InnerBlockEducation() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Card>
                <Typography level="h4">
                    1
                </Typography>
            </Card>
            <Card>
                <Typography level="h4">
                    2
                </Typography>
            </Card>
        </div>
    )
}

export default InnerBlockEducation;