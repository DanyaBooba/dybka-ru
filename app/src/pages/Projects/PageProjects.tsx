import { useState } from 'react';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockProject } from '../../components/blocks/ShowBlock/ShowBlock';
import { projects } from '../../data/projects/projects';
import Search, { SearchAllCount, highlightText } from '../../components/blocks/Search/Search';

import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

function ShowMoreProjectsGitHub() {
    return (
        <Card variant="solid" color="primary" invertedColors sx={{ mb: '2rem', borderRadius: '24px', p: '2rem 1.5rem !important' }}>
            <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'end', gap: '1rem' }}>
                <GitHubIcon sx={{ fontSize: '65px' }} />
                <CardContent>
                    <Typography level="body-md" sx={{ lineHeight: '16px' }}>Смотреть еще больше проектов</Typography>
                    <Typography level="h2">
                        <Link href="//github.com/DanyaBooba" overlay>
                            DanyaBooba
                        </Link>
                    </Typography>
                </CardContent>
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
        <AsideContainer hasSearch="true" title="Страница проектов" desc="Проекты Даниила Дыбка">
            <Search onSearch={handleSearch} />
            <ShowMoreProjectsGitHub />
            {filteredItems.map((item, index) => (
                <ShowBlockProject
                    fullTitle={highlightText(item.fullTitle, searchTerm)}
                    subtitle={highlightText(item.subtitle ?? "", searchTerm)}
                    stack={item.stack}
                    link={item.link}
                    github={item?.github}
                    button={item?.button}
                    key={index}
                />
            ))}
            <SearchAllCount count={filteredItems.length} />
        </AsideContainer>
    )
}

export default PageProjects;
