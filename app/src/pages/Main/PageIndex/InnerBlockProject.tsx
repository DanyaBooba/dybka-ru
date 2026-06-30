import { useRef, useState } from 'react';
import Box from '@mui/joy/Box';
import ShowImageBlock from '../../../components/blocks/ShowBlock/ShowImageBlock';
import { projectsImageMainPage } from '../../../data/projects/projects';

// card takes 86% of the viewport, leaving a 7% peek of the neighbours on each side.
const CARD_BASIS = '86%';
const SIDE_BASIS = '7%';

function InnerBlockProject() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    const items = projectsImageMainPage;

    const slides = (el: HTMLElement) =>
        Array.from(el.querySelectorAll<HTMLElement>('[data-slide]'));

    const handleScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        // pick the slide whose centre is closest to the viewport centre.
        const viewportCenter = el.scrollLeft + el.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        slides(el).forEach((child, i) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(childCenter - viewportCenter);
            if (distance < best) {
                best = distance;
                nearest = i;
            }
        });
        if (nearest !== active) setActive(nearest);
    };

    const goTo = (index: number) => {
        const el = trackRef.current;
        if (!el) return;
        const child = slides(el)[index];
        if (!child) return;
        // scroll so the card sits exactly in the centre of the viewport.
        const target = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
        el.scrollTo({ left: target, behavior: 'smooth' });
    };

    return (
        <Box>
            <Box
                ref={trackRef}
                onScroll={handleScroll}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    // No flex `gap`: a gap adds scroll room past the last card and lets a
                    // hard fling rest a few px off-centre. Spacing between cards is done
                    // with per-slide inner padding instead, so maxScroll lands exactly on
                    // the last card's centre.
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}
            >
                {/* transparent spacer: gives the first card room to reach the centre.
                    Using a flex item (not padding) keeps every width on the same %
                    base, so centring stays pixel-exact for the first/last card too. */}
                <Box aria-hidden sx={{ flex: `0 0 ${SIDE_BASIS}` }} />

                {items.map((item, index) => (
                    <Box
                        key={index}
                        data-slide
                        sx={{
                            flex: `0 0 ${CARD_BASIS}`,
                            scrollSnapAlign: 'center',
                            scrollSnapStop: 'always',
                            boxSizing: 'border-box',
                            // inner padding = visual gap between neighbouring cards
                            px: '0.625rem',
                        }}
                    >
                        <ShowImageBlock
                            img={item.img}
                            fullTitle={item.fullTitle}
                            subtitle={item.subtitle}
                            stack={item.stack}
                            link={item.link}
                            isNew={item?.new}
                            interaction="shrink"
                        />
                    </Box>
                ))}

                <Box aria-hidden sx={{ flex: `0 0 ${SIDE_BASIS}` }} />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '.6rem',
                    mt: '1.25rem',
                }}
            >
                {items.map((_, index) => {
                    const isActive = index === active;
                    return (
                        <Box
                            component="button"
                            key={index}
                            onClick={() => goTo(index)}
                            aria-label={`Перейти к проекту ${index + 1}`}
                            aria-current={isActive}
                            sx={{
                                p: 0,
                                border: 'none',
                                cursor: 'pointer',
                                background: 'transparent',
                                display: 'inline-flex',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '8px',
                                    width: isActive ? '26px' : '8px',
                                    borderRadius: '99px',
                                    backgroundColor: isActive
                                        ? 'var(--joy-palette-primary-500, #0b6bcb)'
                                        : 'var(--joy-palette-neutral-400, rgba(0,0,0,0.25))',
                                    opacity: isActive ? 1 : 0.5,
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default InnerBlockProject;
