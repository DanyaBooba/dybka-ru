import { ReactNode } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Badge from '@mui/joy/Badge';
import { infoTheme } from '../../theme/theme';
import { Box } from '@mui/joy';

type Props = {
    img: string;
    fullTitle: ReactNode;
    subtitle?: ReactNode;
    stack?: string[];
    link: string;
    isNew?: boolean;
    interaction?: 'lift' | 'shrink';
};

export default function ShowImageBlock({ img, fullTitle, subtitle, stack = [], link, isNew = false, interaction = 'lift' }: Props) {
    const isDark = infoTheme() === 'dark';

    const dotIndex = img.lastIndexOf('.');
    const imgThemed =
        dotIndex === -1
            ? `${img}@${isDark ? 'dark' : 'light'}`
            : `${img.slice(0, dotIndex)}@${isDark ? 'dark' : 'light'}${img.slice(dotIndex)}`;

    const interactionSx =
        interaction === 'shrink'
            ? {
                boxShadow: 'none',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': { transform: 'scale(0.97)' },
                '&:active': { transform: 'scale(0.93)' },
            }
            : {
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isDark
                    ? '0 4px 24px -6px rgba(0, 0, 0, 0.6)'
                    : '0 4px 24px -6px rgba(0, 0, 0, 0.18)',
                '&:hover, &:active': {
                    transform: 'translateY(-10px) scale(1.01)',
                    boxShadow: isDark
                        ? '0 24px 50px -18px rgba(0, 0, 0, 0.65)'
                        : '0 24px 50px -18px rgba(0, 0, 0, 0.24)',
                    '& .showImageBlock__photo': {
                        transform: 'scale(1.02)',
                    },
                },
            };

    return (
        <Badge
            badgeContent="Новое!"
            color="danger"
            size="lg"
            invisible={!isNew}
            sx={{
                width: '100%',
                '& .MuiBadge-badge': {
                    transform: 'translate(-6px, 14px)',
                    opacity: isNew ? 1 : 0,
                    zIndex: 3,
                },
            }}
        >
            <Sheet
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: 360, sm: 420, md: 460 },
                    borderRadius: '34px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#000',
                    ...interactionSx,

                    '& .showImageBlock__photo': {
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 0,
                    },

                    '& .showImageBlock__gradient': {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        background: `linear-gradient(
                            to top,
                            rgba(0, 0, 0, 0.88) 0%,
                            rgba(0, 0, 0, 0.6) 32%,
                            rgba(0, 0, 0, 0.15) 62%,
                            rgba(0, 0, 0, 0.05) 100%
                        )`,
                    },
                }}
            >
                <img
                    src={`/img/projects/${imgThemed}.jpg`}
                    alt={typeof fullTitle === 'string' ? fullTitle : ''}
                    loading="lazy"
                    className="showImageBlock__photo"
                />
                <Box className="showImageBlock__gradient" />

                <Box
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '2rem',
                        gap: '.5rem',
                    }}
                >
                    {stack.length > 0 && (
                        <Box style={{ display: 'flex', alignItems: 'center', gap: '.25rem', flexWrap: 'wrap' }}>
                            {stack.map((stackItem, stackIndex) => (
                                <Chip
                                    size="sm"
                                    key={stackIndex}
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                        backdropFilter: 'blur(8px)',
                                        color: '#fff',
                                        border: '1px solid rgba(255, 255, 255, 0.22)',
                                    }}
                                >
                                    {stackItem}
                                </Chip>
                            ))}
                        </Box>
                    )}

                    <Typography
                        level="h2"
                        sx={{ color: '#fff', wordBreak: 'break-word', mb: '0 !important' }}
                    >
                        {fullTitle}
                    </Typography>



                    {!!subtitle && (
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                <Link
                    href={link}
                    target="_blank"
                    overlay
                    aria-label={typeof fullTitle === 'string' ? fullTitle : 'Открыть проект'}
                    sx={{ '&::after': { zIndex: 4, borderRadius: '34px' } }}
                />
            </Sheet>
        </Badge>
    );
}
