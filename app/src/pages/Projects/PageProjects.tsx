import {useState} from 'react';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import {ShowBlockProject} from '../../components/blocks/ShowBlock/ShowBlock';
import {projects} from '../../data/projects/projects';
import Search, {SearchAllCount, highlightText} from '../../components/blocks/Search/Search';

// Добавить ссылку на GitHub: Смотреть еще больше проектов?

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
        <AsideContainer>
            <Search onSearch={handleSearch} />
            {filteredItems.map((item, index) => (
                <ShowBlockProject
                    fullTitle={highlightText(item.fullTitle, searchTerm)}
                    subtitle={highlightText(item.subtitle ?? "", searchTerm)}
                    stack={item.stack}
                    link={item.link}
                    github={item?.github}
                    key={index}
                />
            ))}
            <SearchAllCount count={filteredItems.length} />
        </AsideContainer>
    )
}

export default PageProjects;