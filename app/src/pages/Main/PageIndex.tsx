import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import ShowBlock from '../../components/blocks/ShowBlock/ShowBlock';
import HeroShowBlock from './PageIndex/HeroShowBlock';
import InnerBlockProject from './PageIndex/InnerBlockProject';
import InnerBlockPhotos from './PageIndex/InnerBlockPhotos';
import InnerBlockSMI from './PageIndex/InnerBlockSMI';
import InnerAboutMe from './PageIndex/InnerAboutMe';
import InnerBlockContacts from './PageIndex/InnerBlockContacts';
import InnerBlockTech from './PageIndex/InnerBlockTech';
import InnerBlockPlatforms from './PageIndex/InnerBlockPlatforms';
import InnerBlockLanguages from './PageIndex/InnerBlockLanguages';
import ShowBlockAquarium from './PageIndex/ShowBlockAquarium';

function PageIndex() {
    return (
        <AsideContainer>
            <HeroShowBlock />
            <ShowBlockAquarium />
            <ShowBlock title="Мои проекты" showMore="/projects" image="projects.png">
                <InnerBlockProject />
            </ShowBlock>
            <ShowBlock title="Фотографии с мероприятий" showMore="/contests" image="photo.png">
                <InnerBlockPhotos />
            </ShowBlock>
            <ShowBlock title="Участие в СМИ" showMore="/smi" image="smi.png">
                <InnerBlockSMI />
            </ShowBlock>
            <ShowBlock title="Обо мне" showMore="/about" image="aboutme.png" linkText="Читать далее">
                <InnerAboutMe />
            </ShowBlock>
            <ShowBlock title="Фреймворки" hover={false}>
                <InnerBlockTech />
            </ShowBlock>
            <ShowBlock title="Технологии" hover={false}>
                <InnerBlockLanguages />
            </ShowBlock>
            <ShowBlock title="Актуальные платформы" hover={false}>
                <InnerBlockPlatforms />
            </ShowBlock>
            <ShowBlock title="Контакты" image="contacts.png">
                <InnerBlockContacts />
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageIndex
