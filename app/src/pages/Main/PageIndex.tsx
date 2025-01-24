import {ReactNode} from "react";
import Sheet from '@mui/joy/Sheet';
import Typography from "@mui/joy/Typography";
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import {currentTheme} from '../../components/theme/theme';
import Link from "@mui/joy/Link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import InnerBlockProject from './PageIndex/InnerBlockProject';
import HeroShowBlock from './PageIndex/HeroShowBlock';
import InnerBlockPhotos from './PageIndex/InnerBlockPhotos';

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

function PageIndex() {
    return (
        <AsideContainer>
            <HeroShowBlock />
            <ShowBlock title="Мои проекты" showMore="/projects" image="projects">
                <InnerBlockProject />
            </ShowBlock>
            <ShowBlock title="Навыки в программировании" showMore="/123" image="charts">
                123
            </ShowBlock>
            <ShowBlock title="Достижения" showMore="/123" image="success">
                123
            </ShowBlock>
            <ShowBlock title="Учеба" showMore="/123" image="education">
                123
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/123" image="photo">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Контакты" showMore="/123" image="contacts">
                123
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageIndex