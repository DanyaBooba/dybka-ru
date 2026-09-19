import { infoTheme } from '../../../components/theme/theme';
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import AquariumSVG from '../../../assets/aquarium'
import { Box } from '@mui/joy'



// Фирменный цвет Аквариума — Tiffany Blue
const AQUARIUM = '#0ebab5';
// затемнённый вариант: на светлом фоне сам Tiffany Blue читается плохо
const AQUARIUM_ON_LIGHT = '#0a8079';
// осветлённый вариант: на тёмном фоне логотип не должен сливаться
const AQUARIUM_ON_DARK = '#4de3de';

// общие адаптивные размеры карточек: на узких экранах всё компактнее
const cardSx = {
    borderRadius: { xs: '28px', sm: '36px' },
    p: { xs: '1.25rem 1.25rem !important', sm: '2rem 1.5rem !important' },
    flex: 1,
    minWidth: 0,
};

const logoSx = {
    transform: 'translate(0px, 5px)',
    flexShrink: 0,
    '& svg': {
        width: { xs: 52, sm: 75 },
        height: 'auto',
    },
};

const rowSx = {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '.75rem', sm: '1rem' },
    minWidth: 0,
};

const titleSx = {
    fontSize: { xs: '1.125rem', sm: '1.5rem' },
    lineHeight: 1.25,
    mb: '.25rem',
    wordBreak: 'break-word',
};

const subtitleSx = {
    fontSize: { xs: '0.875rem', sm: '1rem' },
};

const LeftBlock = () => {
    const isDark = infoTheme() === 'dark';
    const shadowTheme = isDark
        ? '0 4px 34px -1px rgba(0, 0, 0, 0.3), inset 0 0 20px rgb(14 186 181 / 10%)'
        : '0 4px 34px -1px rgba(0, 0, 0, 0.05), inset 0 0 20px rgb(14 186 181 / 10%)';
    const shadowThemeHover = '0 40px 80px -15px rgb(14 186 181 / 35%)';

    return (
        <Card
            variant="solid"
            invertedColors
            sx={{
                ...cardSx,
                backgroundColor: AQUARIUM,
                color: '#fff',
                '& a, & a:hover': { color: '#fff' },
                boxShadow: shadowTheme,
                '&:hover': {
                    boxShadow: shadowThemeHover,
                    transform: 'translateY(-10px) scale(1.01)',
                },
                transition: 'all 0.25s ease',
            }}
        >
            <CardContent orientation="horizontal" sx={rowSx}>
                <Box sx={logoSx}>
                    <AquariumSVG />
                </Box>
                <CardContent sx={{ minWidth: 0 }}>
                    <Typography level="h2" sx={titleSx}>
                        <Link href="https://aquarium.org.ru" target="_blank" overlay>
                            Аквариум
                        </Link>
                    </Typography>
                    <Typography level="body-md" sx={subtitleSx}>Удобный способ держать связь</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

const RightBlock = () => {
    const isDark = infoTheme() === 'dark';
    const accent = isDark ? AQUARIUM_ON_DARK : AQUARIUM_ON_LIGHT;
    const shadowTheme = isDark
        ? '0 4px 34px -1px rgba(0, 0, 0, 0.3), inset 0 0 20px rgb(14 186 181 / 8%)'
        : '0 4px 34px -1px rgba(0, 0, 0, 0.05), inset 0 0 20px rgb(14 186 181 / 8%)';
    const shadowThemeHover = '0 40px 80px -15px rgb(14 186 181 / 25%)';

    return (
        <Card
            variant="plain"
            sx={{
                ...cardSx,
                backgroundColor: isDark ? 'rgba(14, 186, 181, 0.14)' : 'rgba(14, 186, 181, 0.10)',
                border: `1px solid ${isDark ? 'rgba(77, 227, 222, 0.32)' : 'rgba(14, 186, 181, 0.24)'}`,
                boxShadow: shadowTheme,
                '&:hover': {
                    boxShadow: shadowThemeHover,
                    transform: 'translateY(-10px) scale(1.01)',
                },
                transition: 'all 0.25s ease',
            }}
        >
            <CardContent orientation="horizontal" sx={rowSx}>
                <Box sx={logoSx}>
                    <AquariumSVG color={accent} />
                </Box>
                <CardContent sx={{ minWidth: 0 }}>
                    <Typography level="h2" sx={titleSx}>
                        <Link
                            href="https://aquarium.org.ru/apps"
                            target="_blank"
                            overlay
                            sx={{ color: accent, '&:hover': { color: accent } }}
                        >
                            Мобильное приложение
                        </Link>
                    </Typography>
                    <Typography level="body-md" sx={subtitleSx}>Аквариум в кармане</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default function ShowBlockAquarium() {
    return (
        <Box
            sx={{
                display: 'flex',
                // flex: 1 не даёт карточкам переноситься, поэтому на узких экранах
                // раскладываем их в колонку, а не сжимаем до половины ширины
                flexDirection: { xs: 'column', sm: 'row' },
                flexWrap: 'wrap',
                gap: '1rem',
                mb: '2rem',
            }}
        >
            <LeftBlock />
            <RightBlock />
        </Box>
    )
}
