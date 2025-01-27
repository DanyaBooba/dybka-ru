import AsideContainer from '../../components/blocks/AsideContainer/AsideContainer';
import { ShowBlockImage } from '../../components/blocks/ShowBlock/ShowBlock';
import { contests } from '../../data/contests/contests';
import { Element } from 'react-scroll';

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function sortContests(anchor) {
    console.log(anchor)
}

function PageContests() {
    const elementToScroll = window.location.hash

    sortContests(elementToScroll.slice(1));

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const location = useLocation();

    // Обрабатываем hash из URL
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
        <AsideContainer needBack="true">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="section1" ref={section1Ref}>
                section 1
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*{contests.map((item, index) => (*/}
            {/*    <Element id={item.link} key={index}>*/}
            {/*        <ShowBlockImage {...item} />*/}
            {/*    </Element>*/}
            {/*))}*/}
        </AsideContainer>
    )
}

export default PageContests;
