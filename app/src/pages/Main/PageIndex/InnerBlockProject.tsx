import Grid from '@mui/material/Grid2';
import Card from '@mui/joy/Card';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

function BlockProject({ title, subtitle, link }) {
    const gridSize = {
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12
    }

    return (
        <Grid size={gridSize}>
            <Card variant="plain" color="primary" invertedColors sx={{ gap: '.25rem' }}>
                <Typography level="h4" endDecorator={<OpenInNewIcon
                                sx={{ 'width': '.8em !important', height: '.8em !important' }} />}
                            sx={{ justifyContent: 'space-between' }}>
                    {title}
                    <Link overlay href={link} />
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
            <BlockProject
                title="Аквариум"
                subtitle="Платформа социального взаимодействия."
                link="#"
            />
            <BlockProject
                title="Creagoo"
                subtitle="Разработка мобильных игр."
                link="#"
            />
            <BlockProject
                title="Special"
                subtitle="Медиасообщество на тему кода."
                link="#"
            />
            <BlockProject
                title="Around"
                subtitle="Открытый банк заданий."
                link="#"
            />
        </Grid>
    )
}

export default InnerBlockProject;