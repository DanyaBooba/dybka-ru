export const projects = [
    {
        title: 'Редизайн сайта Изобретариум',
        fullTitle: 'Редизайн сайта Изобретариум',
        subtitle: 'Обновил сайт детского технопарка Изобретариум. Улучшил UI/UX',
        stack: [
            'React'
        ],
        link: 'https://izobretarium.ru',
        button: {
            name: 'Читать подробнее',
            link: 'https://aquariumsocial.t.me'
        }
    },
    {
        title: 'Виджет «За Христа Пострадавшие»',
        fullTitle: 'Виджет «За Христа Пострадавшие»',
        subtitle: 'Реализация виджета, отображающего новомученников на текущую дату',
        stack: [
            'React'
        ],
        link: 'https://widget.dybka.ru',
    },
    {
        title: 'Страница новомученников «За Христа Пострадавшие»',
        fullTitle: 'Страница новомученников «За Христа Пострадавшие»',
        subtitle: 'Реализация страницы, которая отображает подробную информацию о каждом новомученнике на текущую дату',
        stack: [
            'PHP'
        ],
        link: 'https://widget-info.dybka.ru',
    },
    {
        title: 'Аквариум',
        fullTitle: 'Социальная сеть Аквариум',
        subtitle: 'Платформа социального взаимодействия.',
        stack: [
            'Laravel'
        ],
        link: 'https://aquariumsocial.ru',
        github: 'aquarium-social',
    },
    {
        title: 'Creagoo',
        fullTitle: 'Разработка мобильных игр Creagoo',
        subtitle: 'Разработка мобильных игр.',
        stack: [
            'Gulp'
        ],
        link: 'https://creagoo.ru',
        github: 'creagoo-2023',
    },
    {
        title: 'Special',
        fullTitle: 'Медиасообщество на тему программирования Special',
        subtitle: 'Медиасообщество на тему кода.',
        stack: [
            'Gulp'
        ],
        link: 'https://news.dybka.ru',
        github: 'special-2024',
    },
    {
        title: 'Around',
        fullTitle: 'Открытый банк заданий Around',
        subtitle: 'Открытый банк заданий.',
        stack: [
            'Gulp',
            '11ty',
        ],
        link: 'https://dev.dybka.ru',
        github: 'dev-dybka',
    },
    {
        title: 'dybka.ru',
        fullTitle: 'Мой лендинг',
        subtitle: 'Мой лендинг.',
        stack: [
            'React',
            'TS',
        ],
        link: 'https://dybka.ru',
        github: 'dybka-ru'
    },
    {
        title: 'vr.creagoo.ru',
        fullTitle: 'Технология виртуальной реальности',
        subtitle: 'Технология виртуальной реальности.',
        stack: [
            'WebGL',
        ],
        link: 'https://vr.creagoo.ru',
    },
    {
        title: 'Мини-игра кликер',
        fullTitle: 'Мини-игра кликер',
        stack: [
            'Чистый JS',
        ],
        link: '/web-games/clicker/index.html',
        github: 'js-get-money-game'
    },
    {
        title: 'Мини-игра «Крестики нолики»',
        fullTitle: 'Мини-игра «Крестики нолики»',
        stack: [
            'Чистый JS',
        ],
        link: '/web-games/tictactoe/index.html',
        github: 'js-tictactoe-super'
    },
]

export const projectsMainPage = projects
    .slice(0, 4)
    .map(({ title, subtitle, link }) => ({ title, subtitle, link }));
