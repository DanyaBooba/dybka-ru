export const contests = [
    {
        imageCap: '2024/icpc/cap.jpg',
        title: 'ICPC',
        desc: 'Международная олимпиада ICPC по программированию и математике.',
        date: '2024 г.',
        images: [
            '2024/icpc/img1.jpg',
        ],
        link: 'icpc-2024'
    },
    {
        imageCap: '2024/pstgu/cap.jpg',
        title: 'Факультетский вечер',
        desc: 'Православный Свято-Тихоновский Гуманитарный Университет.',
        date: '2024 г.',
        images: [
            '2024/pstgu/img1.jpg',
            '2024/pstgu/img2.jpg',
            '2024/pstgu/img3.jpg',
            '2024/pstgu/img4.jpg',
        ],
        link: 'pstgu-faculty-evening'
    },
    {
        imageCap: '2024/baumanka4/cap.jpg',
        title: 'Теоретическая информатика и компьютерные технологии',
        desc: 'Конференция в МГТУ им. Н.Э. Баумана, кафердры ИУ-9.',
        date: '2024 г.',
        images: [
            '2024/baumanka4/img1.jpg',
            '2024/baumanka4/img2.jpg',
        ],
        link: 'bmstu-theoretical-informatics-and-computer-technologies'
    },
    {
        imageCap: '2024/izob/cap.jpg',
        title: 'Изобит-2024',
        desc: 'Конференция в Изобретариуме 3.0.',
        date: '2024 г.',
        images: [
            '2024/izob/img1.jpg',
        ],
        link: 'izobit-2024'
    },
    {
        imageCap: '2024/baumanka3/cap.jpg',
        title: 'Студенческая весна',
        desc: 'Конференция в МГТУ им. Н.Э. Баумана, кафедры ИУ-9.',
        date: '2024 г.',
        images: [
            '2024/baumanka3/img1.jpg',
        ],
        link: 'bmstu-student-spring'
    },
    {
        imageCap: '2023/baumanka2/cap.jpg',
        title: 'Русский Инженер',
        desc: 'Конференция в МГТУ им. Н.Э. Баумана, кафедры ИУ-9.',
        date: '2023 г.',
        images: [
            '2023/baumanka2/img1.jpg',
            '2023/baumanka2/img2.jpg',
            '2023/baumanka2/img3.jpg',
        ],
        link: 'bmstu-russian-engineer'
    },
    {
        imageCap: '2023/gosduma/cap.jpg',
        title: 'Юные техники и изобретатели',
        desc: 'Награждение в Государственной думе.',
        date: '15 сентября 2023 г.',
        images: [
            '2023/gosduma/img1.jpg',
            '2023/gosduma/img2.jpg',
        ],
        link: 'state-duma-young-technicians-and-inventors'
    },
    {
        imageCap: '2023/radiopoisk/cap.jpg',
        title: 'Радио-Поиск',
        desc: 'Конкурс радиолюбителей, г. Москва.',
        date: '22 апреля 2023 г.',
        images: [
            '2023/radiopoisk/img1.jpg',
        ],
        link: 'radio-search'
    },
    {
        imageCap: '2023/futurerussia/cap.jpg',
        title: 'Будущее сильной России – в высоких технологиях',
        desc: 'Конференция, проводимая в сотрудничестве с Radar MMS, г. Санкт-Петербург.',
        date: '8 апреля 2023 г.',
        images: [
            '2023/futurerussia/img1.jpg',
            '2023/futurerussia/img2.jpg',
        ],
        link: 'the-future-of-a-strong-russia-lies-in-high-technology'
    },
    {
        imageCap: '2023/baumanka/cap.jpg',
        title: 'Шаг в будущее',
        desc: 'Олимпиада института МГТУ им. Н.Э. Баумана.',
        date: '23 марта 2023 г.',
        images: [
            '2023/baumanka/img1.jpg',
        ],
        link: 'bmstu-step-into-the-future'
    },
    {
        imageCap: '2023/mai3/cap.jpg',
        title: 'Будущее начинается сегодня',
        desc: 'Конкурс от института МАИ.',
        date: '15 марта 2023 г.',
        images: [
            '2023/mai3/img1.jpg',
        ],
        link: 'mai-the-future-starts-today'
    },
    {
        imageCap: '2023/radarmms/cap.jpg',
        title: 'Будущее Петербурга – в творчестве юных',
        desc: 'Кейс-фестиваль на базе Radar MMS, г. Санкт-Петербург.',
        date: '3 марта 2023 г.',
        images: [
            '2023/radarmms/img1.jpg',
            '2023/radarmms/img2.jpg',
            '2023/radarmms/img3.jpg',
            '2023/radarmms/img4.jpg',
            '2023/radarmms/img5.jpg',
        ],
        link: 'the-future-of-st-petersburg-is-in-the-creativity-of-young-people'
    },
]

export const contestsMainPage = contests
    .slice(0, 3)
    .map(({ imageCap, link, title }) => ({ imageCap, link, title }));
