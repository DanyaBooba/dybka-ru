import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import AquariumSVG from '../../../assets/aquarium'

export default function ShowBlockAquarium() {
    return (
        <Card variant="solid" color="primary" invertedColors sx={{ mb: '2rem', borderRadius: '36px', p: '2rem 1.5rem !important' }}>
            <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'end', gap: '1rem' }}>
                <AquariumSVG />
                <CardContent>
                    <Typography level="h2">
                        <Link href="https://mini.aquarium.org.ru" target="_blank" overlay>
                            Аквариум мини
                        </Link>
                    </Typography>
                    <Typography level="body-md">Мой мессенджер</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}
