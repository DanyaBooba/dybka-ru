import {ReactNode} from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import {currentTheme} from '../../../components/theme/theme';
import Fancybox from '../../../components/blocks/Fancybox/Fancybox';
import Link from "@mui/joy/Link";
import AspectRatio from "@mui/joy/AspectRatio";
import Chip from "@mui/joy/Chip";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import IconButton from '@mui/joy/IconButton';

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
    image: string,
    children: ReactNode,
    linkText?: string
};

function BlockImage({ imageCap, title }) {
    return (
        <>
            <Fancybox>
                <a data-fancybox="gallery" href={`/img/contests/${imageCap}`}>
                    <AspectRatio ratio="8/5" sx={{ '& div': {
                                     backgroundColor: currentTheme().showBlock.backgroundColor,
                                     borderTopLeftRadius: '24px',
                                     borderTopRightRadius: '24px',
                                 } }}>
                        <img src={`/img/contests/${imageCap}`} alt={title} />
                    </AspectRatio>
                </a>
            </Fancybox>
        </>
    )
}

export function ShowBlockImage({ imageCap, title, desc, date, link  } : PropsImage) {
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
                    <Chip size="lg">{date}</Chip>
                    <IconButton component="a" href={`/contests/#${link}`}>
                        <InsertLinkIcon className="showBlockImageLink" />
                    </IconButton>
                </div>
                <Typography level="body-lg">
                    {desc}
                </Typography>
            </div>
        </Sheet>
    )
}

function ShowBlock({title, showMore="", image="", children, linkText="Смотреть ещё"} : Props) {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock">
            {!!image && (
                <img
                    src={`/img/illustrations/${image}.png`}
                    aria-label={title}
                    className="showBlock__image"
                    alt={title} />
            )}
            <Typography level="h2" id={image} sx={{ justifyContent: 'space-between', alignItems: 'end', mb: '1.5rem !important' }}>
                {title}
            </Typography>
            {children}
            {!!showMore && (
                <div style={{ marginTop: '2rem' }}>
                    <Link href={showMore} variant="soft" endDecorator={<ChevronRightIcon />}>
                        {linkText}
                    </Link>
                </div>
            )}
        </Sheet>
    )
}

export default ShowBlock;