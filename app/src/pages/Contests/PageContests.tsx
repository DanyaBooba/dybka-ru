import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockImage } from '../../components/blocks/ShowBlock/ShowBlock';
import { contests } from '../../data/contests/contests';
import { Element } from 'react-scroll';

function PageContests() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const targetId = location.hash.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return (
        <AsideContainer>
            {contests.map((item, index) => (
                <Element id={item.link} key={index}>
                    <ShowBlockImage {...item} />
                </Element>
            ))}
        </AsideContainer>
    )
}

export default PageContests;
