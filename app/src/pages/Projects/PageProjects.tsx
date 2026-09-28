import { useState } from 'react';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockProject } from '../../components/blocks/ShowBlock/ShowBlock';
import ShowImageBlock from '../../components/blocks/ShowBlock/ShowImageBlock';
import FadeIn from '../../components/blocks/FadeIn/FadeIn';
import { projects, archived } from '../../data/projects/projects';
import Search, { SearchAllCount, highlightText } from '../../components/blocks/Search/Search';

import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box } from '@mui/joy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function ShowMoreProjectsGitHub() {
    return (
        <Card variant="solid" color="primary" invertedColors sx={{ mb: '2rem', borderRadius: '36px', p: '2rem 1.5rem !important' }}>
            <CardContent
                orientation="horizontal"
                sx={{
                    // на мобильных — всё вместе по центру,
                    // на десктопе — логотип слева, текст по абсолютному центру карточки
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                <GitHubIcon
                    sx={{
                        fontSize: '65px',
                        position: { xs: 'static', sm: 'absolute' },
                        left: 0,
                        bottom: 0,
                    }}
                />
                <Box
                    sx={{
                        textAlign: { xs: 'left', sm: 'center' },
                        mx: { xs: 0, sm: 'auto' },
                    }}
                >
                    <Typography level="h2" sx={{ width: 'fit-content', mx: { xs: 0, sm: 'auto' } }}>
                        <Link href="//github.com/DanyaBooba" target="_blank" overlay>
                            Все проекты
                        </Link>
                    </Typography>
                    <Typography
                        level="body-md"
                        sx={{ lineHeight: '20px', width: 'fit-content', mx: { xs: 0, sm: 'auto' } }}
                    >
                        github.com/DanyaBooba
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

function ProjectItem({ item, searchTerm }) {
    if (item.img && !item.soon) {
        return (
            <div style={{ marginBottom: '2rem' }}>
                <ShowImageBlock
                    img={item.img}
                    fullTitle={highlightText(item.fullTitle, searchTerm)}
                    subtitle={highlightText(item.subtitle ?? "", searchTerm)}
                    stack={item.stack}
                    link={item.link}
                    isNew={item?.new}
                />
            </div>
        )
    }

    return (
        <ShowBlockProject
            fullTitle={highlightText(item.fullTitle, searchTerm)}
            subtitle={highlightText(item.subtitle ?? "", searchTerm)}
            stack={item.stack}
            link={item.link}
            github={item?.github}
            button={item?.button}
            soon={item?.soon}
            isNew={item?.new}
        />
    )
}

function filterProjects(items, searchTerm) {
    const searchLower = searchTerm.toLowerCase();
    return items.filter(item => (
        (item.title && item.title.toLowerCase().includes(searchLower)) ||
        (item.fullTitle && item.fullTitle.toLowerCase().includes(searchLower)) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchLower))
    ));
}

function PageProjects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [archiveOpen, setArchiveOpen] = useState(false);
    const reduced = useReducedMotion();

    function handleSearch(term) {
        setSearchTerm(term);
    }

    const filteredItems = filterProjects(projects, searchTerm);
    const filteredArchived = filterProjects(archived, searchTerm);
    const count = filteredItems.length + (archiveOpen ? filteredArchived.length : 0);

    return (
        <AsideContainer hasSearch="true" title="Страница проектов" desc="Страница, на которой я рассказываю о своих проектах, которые разрабатывал или разрабатываю сейчас">
            <Search onSearch={handleSearch} />
            <ShowMoreProjectsGitHub />
            {filteredItems.map((item, index) => (
                <FadeIn key={index} delay={Math.min(index, 5) * 0.06}>
                    <ProjectItem item={item} searchTerm={searchTerm} />
                </FadeIn>
            ))}
            {filteredArchived.length > 0 && (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: '1rem' }}>
                        <Link
                            component="button"
                            underline="none"
                            onClick={() => setArchiveOpen(open => !open)}
                            aria-expanded={archiveOpen}
                            endDecorator={
                                <ExpandMoreIcon
                                    sx={{
                                        transition: 'transform 0.3s ease',
                                        transform: archiveOpen ? 'rotate(180deg)' : 'none',
                                    }}
                                />
                            }
                            sx={{ fontWeight: 600 }}
                        >
                            Проекты в архиве
                        </Link>
                    </Box>
                    <AnimatePresence initial={false}>
                        {archiveOpen && (
                            <motion.div
                                key="archive"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: 'hidden' }}
                            >
                                <Box sx={{ pt: '2rem', px: '.5rem', mx: '-.5rem' }}>
                                    {filteredArchived.map((item, index) => (
                                        <motion.div
                                            key={item.fullTitle}
                                            initial={{ opacity: 0, y: reduced ? 0 : 16, filter: reduced ? 'blur(0px)' : 'blur(6px)' }}
                                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            <ProjectItem item={item} searchTerm={searchTerm} />
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
            <SearchAllCount count={count} />
        </AsideContainer>
    )
}

export default PageProjects;
