import {ReactNode} from "react";
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import {currentTheme} from '../../../components/theme/theme';
import Link from "@mui/joy/Link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {
    children?: ReactNode,
    title: string,
    showMore: string,
    image: string,
    linkText?: string,
};

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