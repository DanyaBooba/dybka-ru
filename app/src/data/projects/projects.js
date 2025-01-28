export const projects = [
    {
        title: 'Аквариум',
        subtitle: 'Платформа социального взаимодействия.',
        stack: [
            'Laravel'
        ],
        link: 'https://aquariumsocial.ru'
    },
    {
        title: 'Creagoo',
        subtitle: 'Разработка мобильных игр.',
        stack: [
            'Gulp'
        ],
        link: 'https://creagoo.ru'
    },
    {
        title: 'Special',
        subtitle: 'Медиасообщество на тему кода.',
        stack: [
            'Gulp'
        ],
        link: 'https://news.dybka.ru'
    },
    {
        title: 'Around',
        subtitle: 'Открытый банк заданий.',
        stack: [
            'Gulp',
            '11ty',
        ],
        link: 'https://dev.dybka.ru'
    },
    {
        title: 'dybka.ru',
        subtitle: 'Мой лендинг.',
        stack: [
            'React',
            'TS',
        ],
        link: 'https://dybka.ru'
    },
    {
        title: 'vr.creagoo.ru',
        subtitle: 'Технология виртуальной реальности.',
        stack: [
            'WebGL',
        ],
        link: 'https://vr.creagoo.ru'
    },
    {
        title: 'Мини-игра кликер',
//        subtitle: 'Мини-игра кликер.',
        stack: [
            'Vanilla JS',
        ],
        link: '/web-games/clicker'
    },
    {
        title: 'Мини-игра «Крестики нолики»',
//        subtitle: 'Мини-игра «Крестики нолики».',
        stack: [
            'Vanilla JS',
        ],
        link: '/web-games/tictactoe'
    },
]

export const projectsMainPage = projects
    .slice(0, 4)
    .map(({ title, subtitle, link }) => ({ title, subtitle, link }));