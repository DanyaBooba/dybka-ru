import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import ShowBlock from '../../components/blocks/ShowBlock/ShowBlock';

import HeroShowBlock from './PageIndex/HeroShowBlock';
import InnerBlockProject from './PageIndex/InnerBlockProject';
import InnerBlockPhotos from './PageIndex/InnerBlockPhotos';
import InnerBlockSMI from './PageIndex/InnerBlockSMI';
import InnerAboutMe from './PageIndex/InnerAboutMe';
import InnerBlockContacts from './PageIndex/InnerBlockContacts';

function PageIndex() {
    return (
        <AsideContainer>
            <HeroShowBlock />
            <ShowBlock title="Мои проекты" showMore="/projects" image="projects">
                <InnerBlockProject />
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/contests" image="photo">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Участие в СМИ" showMore="/smi" image="smi">
                <InnerBlockSMI />
            </ShowBlock>
            <ShowBlock title="Достижения" showMore="/123" image="success">
                123
            </ShowBlock>
            <ShowBlock title="Обо мне" showMore="/about" image="aboutme" linkText="Читать далее">
                <InnerAboutMe />
            </ShowBlock>
            <ShowBlock title="Навыки в программировании" image="charts">
                123
            </ShowBlock>
            <ShowBlock title="Образование" image="education">
                123
            </ShowBlock>
            <ShowBlock title="Контакты" image="contacts">
                <InnerBlockContacts />
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageIndex