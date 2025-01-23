import AspectRatio from '@mui/joy/AspectRatio';
import {currentTheme} from '../../../components/theme/theme';
import Typography from "@mui/joy/Typography";
import Sheet from '@mui/joy/Sheet';
import Link from "@mui/joy/Link";

function HeroShowBlock() {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock-hero">
            <AspectRatio ratio="8/5" sx={{ '& div': {
                             backgroundColor: currentTheme().showBlock.backgroundColor,
                             borderTopLeftRadius: '24px',
                             borderTopRightRadius: '24px',
                         } }}>
                <img src={`/img/illustrations/cap.jpg`} alt="Даниил Дыбка" />
            </AspectRatio>
            <div className="sheetBlock-hero__inner">
                <Typography level="h1" sx={{ mb: '.5rem' }}>
                    Даниил Дыбка
                </Typography>
                <Typography level="body-lg">
                    Разрабатываю свой проект Аквариум
                    {' '}
                    <Link href="https://aquariumsocial.t.me" target="_blank">
                        @aquariumsocial
                    </Link>
                    .<br/>Люблю заниматься программированием и преподавать его.
                </Typography>
            </div>
        </Sheet>
    )
}

export default HeroShowBlock