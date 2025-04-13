import ShowBlock, { ShowBlockEmpty } from '../../components/blocks/ShowBlock/ShowBlock';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import Typography from '@mui/joy/Typography';

function PageAbout() {
    return (
        <AsideContainer title="Обо мне" desc="Подробная информация про Даниила Дыбка">
            <ShowBlock title="Обо мне" image="aboutme.png" showMore="" myNone="yes">
                <Typography sx={{ lineHeight: '180%' }}>
                    Меня зовут Даниил Дыбка и мне очень нравится заниматься программированием и разработкой приложений.
                </Typography>
            </ShowBlock>
            <ShowBlockEmpty>
                <Typography level="h2" sx={{ mb: '1rem !important' }}>
                    Начало разработки
                </Typography>
                <Typography sx={{ lineHeight: '180%' }}>
                    Свой путь я начал с изучения разработки мобильных игр на Unity и в это время создал свою первую игру Babka On The Hunt. Благодаря этой игре я познакомился с игровым движком Unity.
                    После я стал разрабатывать другие игровые пет-проекты, чтобы повышать навыки. Часть из них я публиковал в Google Play и на других магазинах.
                    Для размещения ссылок на скачивание игр я решил начать разработку сайта.
                </Typography>
            </ShowBlockEmpty>
            <ShowBlockEmpty>
                <Typography level="h2" sx={{ mb: '1rem !important' }}>
                    Первый сайт
                </Typography>
                <Typography sx={{ lineHeight: '180%' }}>
                    Первый сайт я создал в 2019 году для игры Babka On The Hunt. На сайте я размещал ссылки для скачивания игру и небольшую справку об обновлениях игры.
                    Первый дизайн представлял собой 2 прямоугольника: один из них для навигации, второй содержал контент страницы. Я подумал, что было бы хорошо обновить дизайн и для новой версии сайта я решил воспользоваться фреймворком Bootstrap и готовыми шаблонами.
                    Я применил готовый шаблон на сайте и стал добавлять новые страницы: в то время бушевал коронавирус, поэтому в моих проектах начало появляться его упоминание и инструкции, как с ним бороться.
                </Typography>
            </ShowBlockEmpty>
            <ShowBlock title="Сборщик пакетов Gulp" image="tech/gulp.svg" showMore="" myNone="yes">
                <Typography sx={{ lineHeight: '180%' }}>
                    Иногда приходится разработать очень простой сайт (иногда даже одностраничный), но вариант использования чистого HTML не подходит из-за отсутствия модульности в данном решении. Именно поэтому мною было решено изучить генератор статики Gulp для возможности формирования простых сайтов с использованием модульности, сжатия данных и прочих преобразований файлов. Данное решение оказалось простым и удобным, главная задача – подобрать npm пакеты, которые не будут создавать проблем.
                </Typography>
            </ShowBlock>
            <ShowBlockEmpty>
                <Typography level="h2" sx={{ mb: '1rem !important' }}>
                    Генератор статики 11ty
                </Typography>
                <Typography sx={{ lineHeight: '180%' }}>
                    Дополнительно к сборщику пакетов Gulp я решил попробовать решение генератора статики 11ty в купе с Gulp и как закрепление результата разработал пет-проект открытого банка заданий «Around».
                </Typography>
            </ShowBlockEmpty>
            <ShowBlock title="Фреймворк Laravel" image="tech/laravel.svg" showMore="" myNone="yes">
                <Typography sx={{ lineHeight: '180%' }}>
                    Для своего проекта социальной сети Аквариум мною было решено улучшить архитектуру проекта для возможности масштабирования. Выбор пал в сторону фреймворка Laravel языка программирования PHP. Я стал изучать данное решение и стал изменять проект под фреймворк Laravel. На данный момент я продолжаю развитие проекта, используя фреймворк Laravel.
                </Typography>
            </ShowBlock>
            <ShowBlock title="Фреймворк React" image="tech/react.svg" showMore="" myNone="yes">
                <Typography sx={{ lineHeight: '180%' }}>
                    Я решил задуматься о frontend-части сайта, потому что до этого я либо использовал собственные стили, либо использовал фреймворк Bootstrap, а мне хотелось получить больше динамики от сайтов. Я стал добавлять JavaScript в свои проекты, и пиком динамики стала возможность изучения фреймворка React и применения в своих проектах. И я решил подкрепить свои знания разработкой пет-проектов, одним из которых стал мой лендинг.
                </Typography>
            </ShowBlock>
        </AsideContainer>
    )
}

export default PageAbout;
