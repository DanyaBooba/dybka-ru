import Container from '@mui/material/Container';
import {currentTheme} from '../../../theme/theme';
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
            </footer>
        </Container>
    )
}

export default Footer