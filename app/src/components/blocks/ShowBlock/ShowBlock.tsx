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
};

function ShowBlock({title, showMore="", image="", children} : Props) {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock">
            {!!image && (
                <img src={`/img/illustrations/${image}.png`} aria-label={title} style={{ maxWidth: '80px', height: 'auto' }}  alt={title}/>
            )}
            <Typography level="h2" id={image}>
                {title}
            </Typography>
            {children}
            {!!showMore && (
                <div style={{ marginTop: '2rem' }}>
                    <Link href={showMore} variant="soft" endDecorator={<ChevronRightIcon />}>
                        Смотреть ещё
                    </Link>
                </div>
            )}
        </Sheet>
    )
}

export default ShowBlock;