import { useState } from 'react';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockProject } from '../../components/blocks/ShowBlock/ShowBlock';
import ShowImageBlock from '../../components/blocks/ShowBlock/ShowImageBlock';
import FadeIn from '../../components/blocks/FadeIn/FadeIn';
import { projects } from '../../data/projects/projects';
import Search, { SearchAllCount, highlightText } from '../../components/blocks/Search/Search';

import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box } from '@mui/joy';

function ShowMoreProjectsGitHub() {
    return (
        <Card variant="solid" color="primary" invertedColors sx={{ mb: '2rem', borderRadius: '36px', p: '2rem 1.5rem !important' }}>
            <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'end', justifyContent: 'center', gap: '1rem' }}>
                <GitHubIcon sx={{ fontSize: '65px' }} />
                <Box>
                    <Typography level="h2" sx={{ width: 'fit-content' }}>
                        <Link href="//github.com/DanyaBooba" target="_blank" overlay>
                            Все проекты
                        </Link>
                    </Typography>
                    <Typography level="body-md" sx={{ lineHeight: '20px', width: 'fit-content' }}>github.com/DanyaBooba</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

function PageProjects() {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(term) {
        setSearchTerm(term);
    }

    const filteredItems = projects.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        return (
            (item.title && item.title.toLowerCase().includes(searchLower)) ||
            (item.fullTitle && item.fullTitle.toLowerCase().includes(searchLower)) ||
            (item.subtitle && item.subtitle.toLowerCase().includes(searchLower))
        );
    });

    return (
        <AsideContainer hasSearch="true" title="Страница проектов" desc="Страница, на которой я рассказываю о своих проектах, которые разрабатывал или разрабатываю сейчас">
            <Search onSearch={handleSearch} />
            <ShowMoreProjectsGitHub />
            {filteredItems.map((item, index) => (
                <FadeIn key={index} delay={Math.min(index, 5) * 0.06}>
                    {item.img && !item.soon ? (
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
                    ) : (
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
                    )}
                </FadeIn>
            ))}
            <SearchAllCount count={filteredItems.length} />
        </AsideContainer>
    )
}

export default PageProjects;
