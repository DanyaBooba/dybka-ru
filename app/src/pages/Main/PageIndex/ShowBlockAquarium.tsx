import { infoTheme } from '../../../components/theme/theme';
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import AquariumSVG from '../../../assets/aquarium'
import { Box } from '@mui/joy'



const LeftBlock = () => {
    const isDark = infoTheme() === 'dark';
    const shadowTheme = isDark
        ? '0 4px 34px -1px rgba(0, 0, 0, 0.05), inset 0 0 20px rgb(12 107 203 / 10%)'
        : '0 4px 34px -1px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(12 107 203, 0.1)';
    const shadowThemeHover = isDark
        ? '0 40px 80px -15px rgb(12 107 203 / 12%)'
        : '0 40px 80px -15px rgb(12 107 203 / 12%)';

    return (
        <Card
            variant="solid"
            color="primary"
            invertedColors
            sx={{
                borderRadius: '36px',
                p: '2rem 1.5rem !important',
                flex: 1,
                boxShadow: shadowTheme,
                '&:hover': {
                    boxShadow: shadowThemeHover,
                    transform: 'translateY(-10px) scale(1.01)',
                },
                transition: 'all 0.25s ease',
            }}
        >
            <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <AquariumSVG />
                <CardContent>
                    <Typography level="h2">
                        <Link href="https://aquarium.org.ru" target="_blank" overlay>
                            Аквариум
                        </Link>
                    </Typography>
                    <Typography level="body-md">Удобный способ держать связь</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

const RightBlock = () => (
    <Card
        variant="outlined"
        sx={{
            borderRadius: '36px',
            p: '2rem 1.5rem !important',
            flex: 1,
            borderStyle: 'dashed',
            opacity: 0.75,
        }}
    >
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <CardContent>
                <Typography level="h4">
                    Мобильное приложение
                </Typography>
                <Typography level="body-sm">Скоро...</Typography>
            </CardContent>
        </CardContent>
    </Card>
)

export default function ShowBlockAquarium() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
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
