import {useState} from 'react';
import Container from '@mui/material/Container';
import {currentTheme} from '../../theme/theme';
import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ModalClose from '@mui/joy/ModalClose';

function HeaderMobileDrawer({list}) {
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
        <IconButton variant="solid" size="lg" className="header__mobile-button-drawer" color="primary" onClick={toggleDrawer(true)}>
          <DragHandleIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
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
                  <ListItemButton component="a" href="/123">
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