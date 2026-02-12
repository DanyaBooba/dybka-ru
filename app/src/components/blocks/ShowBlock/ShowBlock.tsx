import { ReactNode } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import { currentTheme, infoTheme } from '../../../components/theme/theme';
import Fancybox from '../../../components/blocks/Fancybox/Fancybox';
import Link from "@mui/joy/Link";
import AspectRatio from "@mui/joy/AspectRatio";
import Chip from "@mui/joy/Chip";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/material/Box';

export const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
};

export const blockStyles = (theme, infoTheme = 'light', hover = true) => {
    const bg = theme.showBlock?.backgroundColor || 'rgba(255, 255, 255, 0.45)';
    const border = theme.showBlock?.borderColor || 'rgba(255, 255, 255, 0.3)';
    const isDark = infoTheme === 'dark';

    return {
        position: 'relative',
        borderRadius: '34px',
        background: 'transparent',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        border: 'none',

        '& .glass-background': {
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: '34px',
            background: bg, // ИСПОЛЬЗУЕМ ЦВЕТ ИЗ ТЕМЫ
            backdropFilter: 'blur(20px) saturate(160%)',
            border: `1px solid ${border}`, // ИСПОЛЬЗУЕМ БОРДЕР ИЗ ТЕМЫ
            boxShadow: isDark
                ? '0 4px 34px -1px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                : '0 4px 34px -1px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            transition: 'all 0.5s ease',

            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: '34px',
                padding: '2px',
                background: `radial-gradient(
                    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                    ${isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)'} 0%,
                    rgba(0, 210, 255, 0.4) 25%,
                    rgba(255, 0, 200, 0.4) 50%,
                    transparent 100%
                )`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0,
                transition: 'opacity 0.4s ease',
            }
        },

        ...(hover && {
            '&:hover': {
                transform: 'translateY(-10px) scale(1.01)',
                '& .glass-background': {
                    // При наведении в темной теме делаем фон чуть светлее, чтобы подчеркнуть объем
                    background: isDark ? 'rgba(40, 40, 40, 0.7)' : 'rgba(255, 255, 255, 0.65)',
                    boxShadow: isDark
                        ? '0 40px 80px -15px rgba(0, 0, 0, 0.6)'
                        : '0 40px 80px -15px rgba(0, 0, 0, 0.12)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                    '&::before': {
                        opacity: 1,
                    }
                },
                '& .liquid-glow': {
                    opacity: 1,
                }
            },

            '& .liquid-glow': {
                position: 'absolute',
                zIndex: 1,
                inset: 0,
                opacity: 0,
                pointerEvents: 'none',
                transition: 'opacity 0.6s ease',
                borderRadius: '34px',
                background: `
                    radial-gradient(
                        500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                        ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)'} 0%,
                        rgba(0, 210, 255, ${isDark ? '0.06' : '0.04'}) 25%,
                        rgba(255, 0, 200, ${isDark ? '0.05' : '0.03'}) 50%,
                        transparent 80%
                    )
                `,
            },
        }),

        '& > *:not(.glass-background):not(.liquid-glow):not(img):not(picture)': {
            position: 'relative',
            zIndex: 2,
        }
    };
};

type PropsImage = {
    imageCap: string,
    title: string,
    desc: string,
    date: string,
    link: string,
};

type Props = {
    title: string,
    showMore?: string,
    image?: string,
    children: ReactNode,
    linkText?: string
    myNone?: string
    hover?: boolean
};

function BlockImage({ imageCap, title }) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={`/img/contests/${imageCap}`}>
                <AspectRatio ratio="8/5" sx={{
                    '& div': {
                        backgroundColor: 'transparent',
                        borderTopLeftRadius: '36px',
                        borderTopRightRadius: '36px',
                    }
                }}>
                    <img src={`/img/contests/${imageCap}`} alt={title} loading="lazy" />
                </AspectRatio>
            </a>
        </Fancybox>
    )
}

export function ShowBlockEmpty({ hover = true, children }) {
    return (
        <Sheet
            onMouseMove={handleMouseMove}
            sx={{
                ...blockStyles(currentTheme(), infoTheme(), hover),
                mb: '2rem !important'
            }}
            className="sheetBlock"
        >
            <div className="glass-background" />
            <div className="liquid-glow" />

            {children}
        </Sheet>
    )
}

export function ShowBlockImage({ imageCap, title, desc, date, link }: PropsImage) {
    return (
        <Sheet
            onMouseMove={handleMouseMove}
            sx={{
                ...blockStyles(currentTheme(), infoTheme()),
            }}
            className="sheetBlock-hero"
        >
            <div className="glass-background" />
            <div className="liquid-glow" />

            <BlockImage imageCap={imageCap} title={title} />
            <div className="sheetBlock-hero__inner">
                <Typography level="h2" sx={{ mb: '.5rem' }}>
                    {title}
                </Typography>
                <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <Chip size="lg" color="primary">{date}</Chip>
                    <IconButton component="a" color="primary" href={`/contests/#${link}`} sx={{ borderRadius: '50%' }} aria-label={`Якорь на ${title}`}>
                        <InsertLinkIcon color="primary" className="showBlockImageLink" />
                    </IconButton>
                </div>
                <Typography level="body-lg">
                    {desc}
                </Typography>
            </div>
        </Sheet>
    )
}

export function ShowBlockProject({ fullTitle, subtitle, stack, link, github, button }) {
    return (
        <Sheet
            onMouseMove={handleMouseMove}
            sx={{
                ...blockStyles(currentTheme(), infoTheme()),
                mb: '2rem !important'
            }}
            className="sheetBlock"
        >
            <div className="glass-background" />
            <div className="liquid-glow" />

            <Typography level="h2" sx={{ justifyContent: 'space-between', alignItems: 'end', mb: '.5rem !important' }}>
                {fullTitle}
            </Typography>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.25rem' }}>
                {stack.map((stackItem, stackIndex) => (
                    <Chip size="lg" color="primary" key={stackIndex}>
                        {stackItem}
                    </Chip>
                ))}
            </div>
            {!!subtitle && (
                <Typography>
                    {subtitle}
                </Typography>
            )}
            <Box
                sx={{
                    marginTop: '2rem', display: 'flex',
                    flexDirection: {
                        lg: 'row',
                        md: 'row',
                        sm: 'row',
                        xs: 'column',
                    },
                    alignItems: {
                        lg: 'center',
                        md: 'center',
                        sm: 'center',
                        xs: 'start',
                    },
                    gap: {
                        lg: '2rem',
                        md: '2rem',
                        sm: '2rem',
                        xs: '1rem',
                    }
                }}>
                <Link href={link} variant="soft" className="linkBorder" target="_blank"
                    endDecorator={<ChevronRightIcon />}>
                    Смотреть проект
                </Link>
                {!!github && (
                    <Link href={`//github.com/DanyaBooba/${github}`} sx={{ backgroundColor: 'transparent !important' }}
                        target="_blank" variant="plain">
                        Открыть страницу GitHub
                    </Link>
                )}
                {!!button && (
                    <Link href={button?.link} sx={{ backgroundColor: 'transparent !important' }}
                        target="_blank" variant="plain">
                        {button?.name}
                    </Link>
                )}
            </Box>
        </Sheet>
    )
}

export function ShowBlockSMI({ title, link }) {
    return (
        <Sheet
            onMouseMove={handleMouseMove}
            sx={{
                ...blockStyles(currentTheme(), infoTheme()),
                mb: '2rem !important'
            }}
            className="sheetBlock"
        >
            <div className="glass-background" />
            <div className="liquid-glow" />

            <Typography level="h2" sx={{ justifyContent: 'space-between', alignItems: 'end', mb: '1rem !important' }}>
                {title}
            </Typography>
            <div>
                <Link href={link} variant="soft" overlay className="linkBorder" target="_blank"
                    endDecorator={<ChevronRightIcon />}>
                    Открыть новость
                </Link>
            </div>
        </Sheet>
    )
}

function ShowBlock({ title, showMore = "", image = "", children, linkText = "Смотреть ещё", myNone = "", hover = true }: Props) {
    const imageSplit = image.split('.')
    const imagePng = imageSplit?.[1] == 'png'
    if (imagePng) {
        image = imageSplit[0]
    }

    return (
        <Sheet
            onMouseMove={handleMouseMove}
            sx={{
                ...blockStyles(currentTheme(), infoTheme(), hover),
                my: myNone ? '0' : '3rem !important',
                mb: myNone ? '2rem' : '0'
            }}
            className="sheetBlock"
        >
            <div className="glass-background" />
            <div className="liquid-glow" />

            {!!image && (
                <>
                    {imagePng && (
                        <picture>
                            <source
                                srcSet={`/img/illustrations/${image}.webp`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`/img/illustrations/${image}.png`}
                                type="image/png"
                            />
                            <img
                                src={`/img/illustrations/${image}.png`}
                                aria-label={title}
                                className="showBlock__image"
                                alt={title}
                            />
                        </picture>
                    )}
                    {!imagePng && (
                        <img
                            src={`/img/illustrations/${image}`}
                            aria-label={title}
                            className="showBlock__image"
                            alt={title}
                        />
                    )}
                </>
            )}
            <Typography level="h2" id={image}
                sx={{ justifyContent: 'space-between', alignItems: 'end', mb: '1.5rem !important' }}>
                {title}
            </Typography>
            {children}
            {!!showMore && (
                <div style={{ marginTop: '2rem' }}>
                    <Link
                        href={showMore}
                        variant="soft"
                        className="linkBorder"
                        endDecorator={<ChevronRightIcon />}
                    >
                        {linkText}
                    </Link>
                </div>
            )}
        </Sheet>
    )
}

export default ShowBlock;
