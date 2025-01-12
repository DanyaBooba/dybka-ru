import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import AsideHeader from '../../components/blocks/AsideHeader/AsideHeader';
import {currentTheme} from '../../components/theme/theme';
import Link from "@mui/joy/Link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ShowBlock({title, showMore="", children}) {
    return (
        <Sheet sx={{
                   borderColor: currentTheme().showBlock.borderColor,
                   backgroundColor: currentTheme().showBlock.backgroundColor,
                   boxShadow: currentTheme().showBlock.boxShadow,
               }} className="sheetBlock">
            <Typography level="h2">
                {title}
            </Typography>
            {children}
            {!!showMore && (
                <div style={{ marginTop: '1rem' }}>
                    <Link href={showMore} variant="soft" endDecorator={<ChevronRightIcon />}>
                        Смотреть ещё
                    </Link>
                </div>
            )}
        </Sheet>
    )
}

function PageIndex() {
    return (
        <AsideHeader>
            <ShowBlock title="Мои проекты" showMore="/123">
                123
            </ShowBlock>
            <ShowBlock title="Навыки в программировании" showMore="/123">
                123
            </ShowBlock>
            <ShowBlock title="Достижения" showMore="/123">
                123
            </ShowBlock>
            <ShowBlock title="Учеба" showMore="/123">
                123
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/123">
                123
            </ShowBlock>
            <ShowBlock title="Контакты" showMore="/123">
                123
            </ShowBlock>
        </AsideHeader>
    )
}

export default PageIndex