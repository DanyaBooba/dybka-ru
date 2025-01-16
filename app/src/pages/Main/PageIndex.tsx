import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import {currentTheme} from '../../components/theme/theme';
import Link from "@mui/joy/Link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from '@mui/material/Grid2';
import Card from '@mui/joy/Card';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function BlockProject({ title, subtitle, link, gridSize=6 }) {
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

function ShowBlock({title, showMore="", image="", children}) {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock">
            {!!image && (
                <img src={`/img/illustrations/${image}.png`} aria-label={title} style={{ maxWidth: '80px', height: 'auto' }} />
            )}
            <Typography level="h2">
                {title}
            </Typography>
            {children}
            {!!showMore && (
                <div style={{ marginTop: '2rem' }}>
                    <Link href={showMore} variant="soft" endDecorator={<ChevronRightIcon />}>
                        Смотреть ещё
                    </Link>
                </div>
            )}
        </Sheet>
    )
}

function PageIndex() {
    return (
        <AsideContainer>
            <ShowBlock title="Мои проекты" showMore="/projects" image="projects">
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
            </ShowBlock>
            <ShowBlock title="Навыки в программировании" showMore="/123" image="charts">
                123
            </ShowBlock>
            <ShowBlock title="Достижения" showMore="/123" image="success">
                123
            </ShowBlock>
            <ShowBlock title="Учеба" showMore="/123" image="education">
                123
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/123" image="photo">
                123
            </ShowBlock>
            <ShowBlock title="Контакты" showMore="/123" image="contacts">
                123
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageIndex