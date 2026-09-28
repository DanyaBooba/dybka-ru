import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { currentTheme } from '../../../theme/theme';
import { navigation } from '../../../../data/navigation';

function SidebarLink({ item }) {
    const isActive = window.location.pathname === item.link;

    if (isActive) {
        return (
            <Typography
                level="body-xs"
                variant="solid"
                color="primary"
                className="sidebar__link sidebar__link--active"
            >
                {item.name}
            </Typography>
        )
    }

    return (
        <Link
            href={item.link}
            color="primary"
            variant="plain"
            underline="none"
            className="sidebar__link"
            sx={{ backgroundColor: 'transparent' }}
        >
            <Typography level="body-xs" sx={{ color: 'inherit', fontWeight: 'inherit' }}>
                {item.name}
            </Typography>
        </Link>
    )
}

function Sidebar() {
    const home = { name: 'главная', link: '/' };

    return (
        <Box component="nav" className="sidebar" aria-label="Основное меню">
            <div
                className="sidebar__inner"
                style={{
                    borderColor: currentTheme().header.borderColor,
                    backgroundColor: currentTheme().header.backgroundColor,
                    // boxShadow: currentTheme().header.boxShadow,
                }}
            >
                {window.location.pathname === home.link ? (
                    <Typography
                        level="body-xs"
                        variant="solid"
                        color="primary"
                        className="sidebar__link sidebar__link--active"
                    >
                        {home.name}
                    </Typography>
                ) : (
                    <Link
                        href={home.link}
                        color="primary"
                        variant="plain"
                        underline="none"
                        className="sidebar__link"
                        sx={{ backgroundColor: 'transparent' }}
                    >
                        <Typography level="body-xs" sx={{ color: 'inherit', fontWeight: 'inherit' }}>
                            {home.name}
                        </Typography>
                    </Link>
                )}

                {navigation.map((item, index) => (
                    <SidebarLink item={item} key={index} />
                ))}
            </div>
        </Box>
    )
}

export default Sidebar;
