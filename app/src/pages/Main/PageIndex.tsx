import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import ShowBlock from '../../components/blocks/ShowBlock/ShowBlock';

import InnerBlockProject from './PageIndex/InnerBlockProject';
import HeroShowBlock from './PageIndex/HeroShowBlock';
import InnerBlockPhotos from './PageIndex/InnerBlockPhotos';
import InnerBlockContacts from './PageIndex/InnerBlockContacts';

function PageIndex() {
    return (
        <AsideContainer>
            <HeroShowBlock />
            <ShowBlock title="Мои проекты" showMore="/projects" image="projects">
                <InnerBlockProject />
            </ShowBlock>
            <ShowBlock title="Достижения" showMore="/123" image="success">
                123
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/123" image="photo">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Участие в СМИ" showMore="/123" image="smi">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Обо мне" showMore="/123" image="aboutMe">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Навыки в программировании" image="charts" showMore="">
                123
            </ShowBlock>
            <ShowBlock title="Образование" image="education" showMore="">
                123
            </ShowBlock>
            <ShowBlock title="Контакты" image="contacts" showMore="">
                <InnerBlockContacts />
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageIndex