import Grid from '@mui/material/Grid2';
import Card from '@mui/joy/Card';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import {projectsMainPage} from '../../../data/projects/projects';

function BlockProject({title, subtitle, link}) {
    const gridSize = {
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12
    }

    return (
        <Grid size={gridSize}>
            <Card variant="plain" color="primary" invertedColors sx={{gap: '.25rem'}}>
                <Typography color="primary" level="title-lg" variant="plain"
                            endDecorator={<OpenInNewIcon sx={{'width': '.8em !important', height: '.8em !important'}}/>}
                            sx={{justifyContent: 'space-between', textTransform: 'uppercase', fontWeight: '700'}}>
                    {title}
                    <Link overlay href={link} target="_blank" aria-label={title}/>
                </Typography>
                <Typography level="body-md">
                    {subtitle}
                </Typography>
            </Card>
        </Grid>
    )
}

function InnerBlockProject() {
    return (
        <Grid container spacing={2}>
            {projectsMainPage.map((item, index) => (
                <BlockProject {...item} key={index}/>
            ))}
        </Grid>
    )
}

export default InnerBlockProject;