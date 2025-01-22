import Container from '@mui/material/Container';
import {currentTheme} from '../../theme/theme';
import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";

function Footer() {
    return (
        <Container maxWidth="md">
            <footer className="footer" style={{
                        boxShadow: currentTheme().showBlock.boxShadow,
                        backgroundColor: currentTheme().showBlock.backgroundColor
                    }}>
                <Typography level="body-sm">
                    © Даниил Дыбка, 2025
                </Typography>
                <Typography level="body-sm">
                    <Link href="/" startDecorator={<img src="/img/illustrations/united-states-apple.png" width="20px" height="20px" />}>
                        en
                    </Link>
                </Typography>
            </footer>
        </Container>
    )
}

export default Footer