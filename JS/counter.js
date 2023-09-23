let fourk = 0;
let hd = 0;

films.forEach((film) => {
    if (film.badge.includes('4k')) fourk++;
    else if (film.badge.includes('hd')) hd++;
});

let counter = [
    {
        name: '4K-s filmek',
        icon: 'ri-4k-line',
        count: fourk
    },
    {
        name: 'Filmek száma',
        icon: 'ri-movie-2-line',
        count: films.length
    },
    {
        name: 'HD-s filmek',
        icon: 'ri-hd-line',
        count: hd
    }
];