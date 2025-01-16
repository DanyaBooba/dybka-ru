import Container from '@mui/material/Container';
import {currentTheme} from '../../theme/theme';
import Link from '@mui/joy/Link';

function Header() {
    return (
        <Container maxWidth="md">
            <header className="header" style={{
                        borderColor: currentTheme().showBlock.borderColor,
                        boxShadow: currentTheme().showBlock.boxShadow,
                        backgroundColor: currentTheme().showBlock.backgroundColor
                    }}>
                <Link href="/" color="neutral">
                    проекты
                </Link>
                <Link href="/" color="neutral">
                    навыки
                </Link>
                <Link href="/" color="neutral">
                    достижения
                </Link>
                <Link href="/" color="neutral">
                    учеба
                </Link>
                <Link href="/" color="neutral">
                    мероприятия
                </Link>
            </header>
        </Container>
    )
}

export default Header