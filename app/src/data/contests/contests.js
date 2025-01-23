export const contests = [
    {
        imageCap: 'image cap 1',
        title: '123',
        desc: '123',
        date: '123',
        images: [
            '123',
            '123',
            '123',
        ],
        link: 'link 1'
    },
    {
        imageCap: 'image cap 2',
        title: '123',
        desc: '123',
        date: '123',
        images: [
            '123',
            '123',
            '123',
        ],
        link: 'link 2'
    },
    {
        imageCap: 'image cap 2',
        title: '123',
        desc: '123',
        date: '123',
        images: [
            '123',
            '123',
            '123',
        ],
        link: 'link 2'
    },
    {
        imageCap: 'image cap 4',
        title: '123',
        desc: '123',
        date: '123',
        images: [
            '123',
            '123',
            '123',
        ],
        link: 'link 2'
    },
]

export const contestsMainPage = contests
    .slice(0, 3)
    .map(({ imageCap, link, title }) => ({ imageCap, link, title }));
