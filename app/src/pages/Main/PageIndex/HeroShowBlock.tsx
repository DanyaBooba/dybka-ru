import AspectRatio from '@mui/joy/AspectRatio';
import { currentTheme } from '../../../components/theme/theme';
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
            <AspectRatio ratio="8/5" sx={{
                '& div': {
                    backgroundColor: currentTheme().showBlock.backgroundColor,
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                }
            }}>
                <img src={`/img/illustrations/cap.jpg`} alt="Даниил Дыбка" />
            </AspectRatio>
            <div className="sheetBlock-hero__inner">
                <Typography level="h1" sx={{ mb: '.5rem' }}>
                    Привет, это Даниил Дыбка
                </Typography>
                <ul style={{ marginBottom: 0 }}>
                    <li style={{ paddingTop: '.25rem', paddingBottom: '.25rem' }}>
                        <Typography level="body-lg">
                            Студент факультета информатики
                        </Typography>
                    </li>
                    <li style={{ paddingTop: '.25rem', paddingBottom: '.25rem' }}>
                        <Typography level="body-lg">
                            Веб-разработчик, программист
                        </Typography>
                    </li>
                    <li style={{ paddingTop: '.25rem', paddingBottom: '.25rem' }}>
                        <Typography level="body-lg">
                            Разрабатываю свой проект Аквариум
                            {' '}
                            <Link href="https://aquariumsocial.t.me" underline="always" target="_blank">
                                @aquariumsocial
                            </Link>
                        </Typography>
                    </li>
                </ul>
            </div>
        </Sheet>
    )
}

export default HeroShowBlock
