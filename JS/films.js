let films = [
    {
        filter: ['adventure', 'comedy', 'fantasy'],
        picture: 'barbie.jpg',
        title: 'Barbie',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '1 óra 54 perc',
        rating: '7.1',
    },
    {
        filter: ['adventure', 'family', 'fantasy'],
        picture: 'mermaid.jpg',
        title: 'A kis hableány',
        year: '2023',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 15 perc',
        rating: '7.2',
    },
    {
        filter: ['horror', 'mystery', 'thriller'],
        picture: 'apaca.jpg',
        title: 'Az apáca 2',
        year: '2023',
        badge: '<i class="ri-hd-line"></i>',
        duration: '1 óra 50 perc',
        rating: '9.3',
    },
    {
        filter: ['biography', 'drama', 'history'],
        picture: 'oppenheimer.jpg',
        title: 'Oppenheimer',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '3 óra',
        rating: '8.6',
    },
    {
        filter: ['drama', 'thriller'],
        picture: 'remenyrabja.jpg',
        title: 'A remény rabjai',
        year: '1994',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 22 perc',
        rating: '9.3',
    },
    {
        filter: ['crime', 'drama'],
        picture: 'keresztapa.jpg',
        title: 'A Keresztapa',
        year: '1972',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 55 perc',
        rating: '9.2',
    },
    {
        filter: ['action', 'crime', 'drama'],
        picture: 'sotetlovag.jpg',
        title: 'A sötét lovag',
        year: '2008',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 32 perc',
        rating: '9.0',
    },
    {
        filter: ['animation', 'action', 'adventure'],
        picture: 'pokember.jpg',
        title: 'Pókember: A pókverzumon át',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 20 perc',
        rating: '8.7',
    },
    {
        filter: ['adventure', 'drama', 'scifi'],
        picture: 'csillagok.jpg',
        title: 'Csillagok között',
        year: '2014',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 49 perc',
        rating: '8.7',
    },
    {
        filter: ['adventure', 'drama', 'war'],
        picture: 'becstelen.jpg',
        title: 'Becstelen brigantyk',
        year: '2009',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 33 perc',
        rating: '8.3',
    },
    {
        filter: ['action', 'adventure', 'drama'],
        picture: 'dune.jpg',
        title: 'Dune',
        year: '2021',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 35 perc',
        rating: '8.0',
    },
    {
        filter: ['action', 'thriller'],
        picture: 'missionimpossible.jpg',
        title: 'Mission: Impossible - Leszámolás - Első Rész',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 43 perc',
        rating: '8.0',
    },
    {
        filter: ['action', 'scifi'],
        picture: 'tenet.jpg',
        title: 'Tenet',
        year: '2020',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 30 perc',
        rating: '5.6',
    },
    {
        filter: ['adventure', 'action'],
        picture: 'indiana.jpg',
        title: 'Indiana Jones és a sors tárcsája',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 20 perc',
        rating: '6.7',
    },
    {
        filter: ['action', 'crime', 'thriller'],
        picture: 'johnwick.jpg',
        title: 'John Wick: 4. felvonás',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 49 perc',
        rating: '7.8',
    },
    {
        filter: ['action', 'crime', 'drama'],
        picture: 'batman.jpg',
        title: 'Batman',
        year: '2022',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 56 perc',
        rating: '7.8',
    },
    {
        filter: ['action', 'adventure', 'fantasy'],
        picture: 'avatar.jpg',
        title: 'Avatar: A víz útja',
        year: '2022',
        badge: '<i class="ri-4k-line"></i>',
        duration: '3 óra 12 perc',
        rating: '7.6',
    },
    {
        filter: ['action', 'drama', 'thriller'],
        picture: 'szovetseg.jpg',
        title: 'A szövetség',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 3 perc',
        rating: '7.5',
    },
    {
        filter: ['action', 'crime', 'thriller'],
        picture: 'vedelmezo.jpg',
        title: 'A védelmező',
        year: '2014',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 12 perc',
        rating: '7.2',
    },
    {
        filter: ['action', 'crime', 'thriller'],
        picture: 'vedelmezo2.jpg',
        title: 'A védelmező 2',
        year: '2018',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 1 perc',
        rating: '6.7',
    },
    {
        filter: ['action', 'crime', 'thriller'],
        picture: 'vedelmezo3.jpg',
        title: 'A védelmező 3',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '1 óra 49 perc',
        rating: '7.1',
    },
    {
        filter: ['comedy', 'horror', 'thriller'],
        picture: 'menu.jpg',
        title: 'A menü',
        year: '2022',
        badge: '<i class="ri-4k-line"></i>',
        duration: '1 óra 46 perc',
        rating: '7.2',
    },
    {
        filter: ['action', 'adventure', 'fantasy'],
        picture: 'flash.jpg',
        title: 'Flash – A Villám',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 24 perc',
        rating: '6.8',
    },
    {
        filter: ['action', 'adventure', 'scifi'],
        picture: 'inception.jpg',
        title: 'Eredet',
        year: '2010',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 28 perc',
        rating: '8.8',
    },
    {
        filter: ['comedy', 'romance'],
        picture: 'nohardfeelings.jpg',
        title: 'Barátnőt felveszünk',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '1 óra 43 perc',
        rating: '6.4',
    },
    {
        filter: ['action', 'crime', 'thriller'],
        picture: 'heartofstone.jpg',
        title: 'Mindent vagy semmit',
        year: '2023',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 2 perc',
        rating: '5.7',
    },
    {
        filter: ['action', 'adventure', 'fantasy'],
        picture: 'karibtenger.jpg',
        title: 'A Karib-tenger kalózai',
        year: '2003',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 23 perc',
        rating: '8.1',
    },

    {
        filter: ['action', 'biography', 'drama'],
        picture: 'hajsza.jpg',
        title: 'Hajsza a győzelemért',
        year: '2013',
        badge: '<i class="ri-hd-line"></i>',
        duration: '2 óra 3 perc',
        rating: '8.1',
    },
    {
        filter: ['animation', 'adventure', 'comedy'],
        picture: 'ratatouille.jpg',
        title: 'L’ecsó',
        year: '2007',
        badge: '<i class="ri-hd-line"></i>',
        duration: '1 óra 51 perc',
        rating: '8.1',
    },
    {
        filter: ['biography', 'drama', 'history'],
        picture: 'hacksaw.jpg',
        title: 'A fegyvertelen katona',
        year: '2016',
        badge: '<i class="ri-4k-line"></i>',
        duration: '2 óra 19 perc',
        rating: '8.1',
    },
];