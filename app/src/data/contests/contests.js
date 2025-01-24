export const contests = [
    {
        imageCap: '2024/pstgu/cap.jpg',
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
        imageCap: '2024/pstgu/cap.jpg',
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
        imageCap: '2024/pstgu/cap.jpg',
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
