import {ReactNode} from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import {currentTheme} from '../../../components/theme/theme';
import Fancybox from '../../../components/blocks/Fancybox/Fancybox';
import Link from "@mui/joy/Link";
import AspectRatio from "@mui/joy/AspectRatio";
import Chip from "@mui/joy/Chip";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type PropsImage = {
    imageCap: string,
    title: string,
    desc: string,
    date: string,
    images: Array<string>,
    link: string,
};

type Props = {
    title: string,
    showMore?: string,
    image: string,
    children: ReactNode,
    linkText?: string
};

function BlockImage({ imageCap, images, title }) {
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

export function ShowBlockImage({ imageCap, title, desc, date, images, link  } : PropsImage) {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock-hero">
            <BlockImage imageCap={imageCap} images={images} title={title} />
            <div className="sheetBlock-hero__inner">
                <Typography level="h2" sx={{ mb: '.5rem' }} id={link}>
                    {title}
                </Typography>
                <Chip size="lg" sx={{ mb: '1rem' }}>{date}</Chip>
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
            <Typography level="h2" id={image} endDecorator={!!image && (
                                <img src={`/img/illustrations/${image}.png`} aria-label={title} style={{ maxWidth: '80px', height: 'auto' }}  alt={title}/>
                        )} sx={{ justifyContent: 'space-between', alignItems: 'end', mb: '1.5rem !important' }}>
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