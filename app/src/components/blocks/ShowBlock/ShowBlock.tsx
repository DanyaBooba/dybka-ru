import { ReactNode } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import { currentTheme } from '../../../components/theme/theme';
import Fancybox from '../../../components/blocks/Fancybox/Fancybox';
import Link from "@mui/joy/Link";
import AspectRatio from "@mui/joy/AspectRatio";
import Chip from "@mui/joy/Chip";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/material/Box';

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
};

function BlockImage({ imageCap, title }) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={`/img/contests/${imageCap}`}>
                <AspectRatio ratio="8/5" sx={{
                    '& div': {
                        backgroundColor: currentTheme().showBlock.backgroundColor,
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

export function ShowBlockEmpty({ children }) {
    return (
        <Sheet sx={{
            borderColor: currentTheme().showBlock.borderColor,
            backgroundColor: currentTheme().showBlock.backgroundColor,
            boxShadow: currentTheme().showBlock.boxShadow,
            mb: '2rem !important'
        }} className="sheetBlock">
            {children}
        </Sheet>
    )
}

export function ShowBlockImage({ imageCap, title, desc, date, link }: PropsImage) {
    return (
        <Sheet sx={{
            backgroundColor: currentTheme().showBlock.backgroundColor,
            boxShadow: currentTheme().showBlock.boxShadow,
            border: 'none !important'
        }} className="sheetBlock-hero">
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
        <Sheet sx={{
            borderColor: currentTheme().showBlock.borderColor,
            backgroundColor: currentTheme().showBlock.backgroundColor,
            boxShadow: currentTheme().showBlock.boxShadow,
            mb: '2rem !important'
        }} className="sheetBlock">
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
        <Sheet sx={{
            borderColor: currentTheme().showBlock.borderColor,
            backgroundColor: currentTheme().showBlock.backgroundColor,
            boxShadow: currentTheme().showBlock.boxShadow,
            mb: '2rem !important'
        }} className="sheetBlock">
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

function ShowBlock({ title, showMore = "", image = "", children, linkText = "Смотреть ещё", myNone = "" }: Props) {
    image = image.split('.')[0]
    return (
        <Sheet sx={{
            borderColor: currentTheme().showBlock.borderColor,
            backgroundColor: currentTheme().showBlock.backgroundColor,
            boxShadow: currentTheme().showBlock.boxShadow,
            my: myNone ? '0' : '3rem !important',
            mb: myNone ? '2rem' : '0'
        }} className="sheetBlock">
            {!!image && (
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
