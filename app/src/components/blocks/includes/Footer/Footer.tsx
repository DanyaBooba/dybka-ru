import { useState } from 'react';
import Container from '@mui/material/Container';
import { currentTheme } from '../../../theme/theme';
import Typography from "@mui/joy/Typography";

function Footer() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 10) {
            alert('uwu');
            setClickCount(0); // сброс, чтобы можно было повторить
        }
    };

    return (
        <Container maxWidth="md">
            <footer
                className="footer"
                onClick={handleClick}
                style={{
                    boxShadow: currentTheme().showBlock.boxShadow,
                    backgroundColor: currentTheme().showBlock.backgroundColor
                }}
            >
                <Typography>
                    © Даниил Дыбка, {new Date().getFullYear()}
                </Typography>
            </footer>
        </Container>
    );
}

export default Footer;
