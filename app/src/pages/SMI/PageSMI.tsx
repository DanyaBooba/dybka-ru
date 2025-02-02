import {useState} from 'react';
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import {ShowBlockSMI} from '../../components/blocks/ShowBlock/ShowBlock';
import Search, {SearchAllCount, highlightText} from '../../components/blocks/Search/Search';
import {smi} from '../../data/smi/smi';

function PageSMI() {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(term) {
        setSearchTerm(term);
    }

    const filteredItems = smi.filter(function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <AsideContainer hasSearch="true">
            <Search onSearch={handleSearch}/>
            {filteredItems.map((item, index) => (
                <ShowBlockSMI link={item.link} title={highlightText(item.title, searchTerm)} key={index}/>
            ))}
            <SearchAllCount count={filteredItems.length}/>
        </AsideContainer>
    )
}

export default PageSMI;