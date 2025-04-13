import { useState } from 'react';
import Container from '@mui/material/Container';
import { currentTheme } from '../../../theme/theme';
import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ModalClose from '@mui/joy/ModalClose';
import HomeIcon from '@mui/icons-material/Home';

function needSeeButtonHome() {
    return window.location.pathname.slice(1).length > 0;
}

function HeaderMobileDrawer({ list }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(inOpen);
        };

    return (
        <Box sx={{ display: 'flex' }}>
            {needSeeButtonHome() && (
                <IconButton component="a" href="/" variant="solid" size="lg" className="header__mobile-button-home"
                    color="primary" aria-label="Перейти на главную страницу">
                    <HomeIcon />
                </IconButton>
            )}
            <IconButton variant="solid" size="lg" className="header__mobile-button-drawer" color="primary"
                onClick={toggleDrawer(true)} aria-label="Открыть меню">
                <DragHandleIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="bottom" size="sm"
                className="header__mobile-drawer">
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            ml: 'auto',
                            mt: 1,
                            mr: 2,
                            justifyContent: 'right'
                        }}
                    >
                        <Typography
                            component="label"
                            htmlFor="close-icon"
                            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
                        >
                            Закрыть
                        </Typography>
                        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                    </Box>
                    <List>
                        {list.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton component="a" href={item.link} className="header__mobile-link-drawer">
                                    {item.name}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

function HeaderDesktopLink({ item }) {
    const pathname = window.location.pathname

    if (pathname == item.link) {
        return (
            <Typography level="body-xs" variant="solid" color="primary" className="header__link linkBorder">
                {item.name}
            </Typography>
        )
    } else {
        return (
            <Typography level="body-xs" className="header__link">
                <Link href={item.link} color="primary" className="linkBorder" variant="soft" underline="none"
                    sx={{ backgroundColor: 'transparent' }}>
                    {item.name}
                </Link>
            </Typography>
        )
    }
}

function HeaderDesktop({ list }) {
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
                <Container className="" maxWidth="md">
                    <div className="header__container" style={{
                        borderColor: currentTheme().header.borderColor,
                        backgroundColor: currentTheme().header.backgroundColor,
                        boxShadow: currentTheme().header.boxShadow,
                        alignItems: 'center'
                    }}>
                        {list.map((item, index) => (
                            <HeaderDesktopLink item={item} key={index} />
                        ))}
                    </div>
                </Container>
            </header>
            {needSeeButtonHome() && (
                <IconButton component="a" href="/" variant="solid" size="lg" className="header__button-home"
                    color="primary" aria-label="Перейти на главную страницу">
                    <HomeIcon />
                </IconButton>
            )}
        </Box>
    )
}

function HeaderMobile({ list }) {
    return (
        <Box sx={{
            display: {
                lg: 'none',
                md: 'none',
                sm: 'none',
                xs: 'block',
            }
        }}>
            <HeaderMobileDrawer list={list} />
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
            name: 'мероприятия',
            link: '/contests',
        },
        {
            name: 'сми',
            link: '/smi',
        },
        {
            name: 'обо мне',
            link: '/about',
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
