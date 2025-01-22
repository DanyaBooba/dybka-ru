import Container from '@mui/material/Container';
import {currentTheme} from '../../theme/theme';
import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box';

function HeaderDesktop({list}) {
    return (
        <Box sx={{
                 display: {
                     lg: 'block',
                     md: 'block',
                     sm: 'block',
                     xs: 'none',
                 }
             }}>
            <header className="header">
                <Container className="" maxWidth="md"  >
                    <div className="header__container" style={{
                             borderColor: currentTheme().showBlock.borderColor,
                             boxShadow: currentTheme().showBlock.boxShadow,
                             backgroundColor: currentTheme().showBlock.backgroundColor
                         }}>
                        {list.map((item, index) => (
                            <Typography level="body-xs" className="header__link" key={index}>
                                <Link href={item.link} color="neutral">
                                    {item.name}
                                </Link>
                            </Typography>
                        ))}
                    </div>
                </Container>
            </header>
        </Box>
    )
}

function HeaderMobile({list}) {
    return (
        <Box sx={{
                 display: {
                     lg: 'none',
                     md: 'none',
                     sm: 'none',
                     xs: 'block',
                 }
             }}>
            123
        </Box>
    )
}

function Header() {
    const list = [
        {
            name: 'проекты',
            link: '/projects',
        },
        {
            name: 'навыки',
            link: '/',
        },
        {
            name: 'достижения',
            link: '/',
        },
        {
            name: 'мероприятия',
            link: '/',
        },
    ]

    return (
        <>
            <HeaderDesktop list={list} />
            <HeaderMobile list={list} />
        </>
    )
}

export default Header