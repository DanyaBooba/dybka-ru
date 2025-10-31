import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockImage } from '../../components/blocks/ShowBlock/ShowBlock';
import { contests } from '../../data/contests/contests';
import { Element } from 'react-scroll';
import Search, { SearchAllCount, highlightText } from '../../components/blocks/Search/Search';

function PageContests() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace("#", "");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    function handleSearch(term) {
        setSearchTerm(term);
    }

    const filteredItems = contests.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        return (
            (item.title && item.title.toLowerCase().includes(searchLower)) ||
            (item.desc && item.desc.toLowerCase().includes(searchLower))
        );
    });

    return (
        <AsideContainer hasSearch="true" title="Страница мероприятий" desc="Страница, на которой рассказываю о мероприятиях, на которых я или мои ученики приняли участие">
            <Search onSearch={handleSearch} />
            {filteredItems.map((item, index) => (
                <Element id={item.link} key={index}>
                    <ShowBlockImage
                        imageCap={item.imageCap}
                        title={highlightText(item.title, searchTerm)}
                        desc={highlightText(item.desc, searchTerm)}
                        date={item.date}
                        link={item.link}
                    />
                </Element>
            ))}
            <SearchAllCount count={filteredItems.length} mb="3.5rem" />
        </AsideContainer>
    )
}

export default PageContests;
