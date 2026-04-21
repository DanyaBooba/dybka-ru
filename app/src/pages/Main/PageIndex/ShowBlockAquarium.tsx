import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import AquariumSVG from '../../../assets/aquarium'
import { Box } from '@mui/joy'

const LeftBlock = () => (
    <Card
        variant="solid"
        color="primary"
        invertedColors
        sx={{
            borderRadius: '36px',
            p: '2rem 1.5rem !important',
            flex: 1
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
