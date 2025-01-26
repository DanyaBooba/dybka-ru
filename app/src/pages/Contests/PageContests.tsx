import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import {ShowBlockImage} from '../../components/blocks/ShowBlock/ShowBlock';
import {contests} from '../../data/contests/contests';

function PageContests() {
    return (
        <AsideContainer needBack="true">
            {contests.map((item, index) => (
                <ShowBlockImage {...item} key={index} fancybox="true" />
            ))}
        </AsideContainer>
    )
}

export default PageContests;