// ========== PAGE NAVIGATION ==========
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

function activeLink() {
    navigationLinks.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
        pages.forEach(page => {
            if (page.getAttribute('data-page') === this.getAttribute('data-nav-link')) page.classList.add('active');
            else page.classList.remove('active');
        });
        window.scrollTo(0,0);
    });
}

navigationLinks.forEach(n => n.addEventListener('click', activeLink));

// ========== CLOCK ==========
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

// ========== TEAM ==========
function createElementWithAttributes(tag, attributes, innerHTML) {
    const element = document.createElement(tag);
    for (const attribute in attributes) element.setAttribute(attribute, attributes[attribute]); //element[attribute] = attributes[attribute];
    if (innerHTML !== undefined) element.innerHTML = innerHTML;
    return element;
};

const teamContainer = document.querySelector('.team-container');

for (let i = 0; i < team.length;i++) {
    const card = createElementWithAttributes('div', { class: 'team-card' });
    const img = createElementWithAttributes('img', { class: 'team-img', src: `Images/Team/${team[i].picture}`, alt: `${team[i].alt}` });
    const h3 = createElementWithAttributes('h3', { class: 'team-title modal-button' }, team[i].name);
    const icon = createElementWithAttributes('i', { class: 'ri-arrow-right-s-line' });
    const span = createElementWithAttributes('span', { class: 'team-subtitle' }, `${team[i].icon} ${team[i].role}`);
    //----
    teamContainer.append(card);
    card.append(img, h3, span);
    h3.append(icon);
};

// ========== MODAL ==========
const modalView = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.modal-button');
const modalClose = document.querySelector('.modal-close');

const title = document.querySelector('.modal-title');
const introduction = document.querySelector('.modal-description');

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        title.innerHTML = `${team[i].name} bemutatkozása!`;
        introduction.innerHTML = team[i].introduction;
        modalView.classList.add('active-modal');
    });
});

if(modalClose){
    modalClose.addEventListener('click', () =>{
        modalView.classList.remove('active-modal')
    })
}

// ========== LANGUAGES ==========
const langContainer = document.querySelector('.lang-info');

for (let i = 0; i < lang.length;i++) {
    const card = createElementWithAttributes('div', { class: 'lang-data' });
    const blob = createElementWithAttributes('div', { class: 'lang-blob' });
    const img = createElementWithAttributes('img', { src: `Images/Languages/${lang[i].picture}`, alt: `${lang[i].alt}` });
    const h3 = createElementWithAttributes('h3', { class: 'lang-name' }, lang[i].name);
    const span = createElementWithAttributes('span', { class: 'lang-subtitle' }, lang[i].level );
    //----
    langContainer.append(card);
    card.append(blob, h3, span);
    blob.append(img);
};

// ========== SLIDER ==========
let ProjectsSwiper = new Swiper('.gallery-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56
        }
    }
});

// BETÖLTENI A KÉPEKET

// ========== MOVIE TOP-RATED ==========
const topRatedContainer = document.getElementById('film-top-rated-list');

films.sort((a, b) => b.rating - a.rating);
const topRated = films.slice(0, 3);

for (let i = 0; i < topRated.length;i++) {
    const card = createElementWithAttributes('li', { class: 'film-card' });
    const figure = createElementWithAttributes('figure', { class: 'film-card-banner' });
    const img = createElementWithAttributes('img', { src: `Images/Movie/${topRated[i].picture}`, alt: `${topRated[i].title} képe`, 'data-source': 'A kép az IMDB hivatalos oldaláról származik.' });
    const wrapper = createElementWithAttributes('div', { class: 'film-title-wrapper' });
    const h3 = createElementWithAttributes('h3', { class: 'film-title' }, topRated[i].title);
    const date = createElementWithAttributes('time', { dateTime: `${topRated[i].year}` }, topRated[i].year);
    const data = createElementWithAttributes('div', { class: 'film-card-data' });
    const badge = createElementWithAttributes('div', { class: 'film-badge badge-outline' }, topRated[i].badge);
    const duration = createElementWithAttributes('div', { class: 'film-duration' }, `<i class="ri-time-line"></i>`);
    const time = createElementWithAttributes('time', {}, topRated[i].duration);
    const rating = createElementWithAttributes('div', { class: 'film-rating' }, `<i class="ri-star-line"></i> ${topRated[i].rating}`);
    //----
    topRatedContainer.append(card);
    card.append(figure, wrapper, data);
    figure.append(img);
    wrapper.append(h3, date);
    data.append(badge, duration, rating);
    duration.append(time);
};

// ========== MOVIE FILTER ==========
const tristateBtn = document.querySelectorAll('.film-filter-btn');

tristateBtn.forEach((item) => {
    item.addEventListener('click', () => {
        switch (item.value.charAt(0)) {
            case '\u268A':
                item.value = '\u2705';
                break;
            case '\u2705':
                item.value = '\u274C';
                break;
            case '\u274C':
                item.value = '\u268A';
                break;
            default:
                alert(item.value);
        }
    });
});

const filmContainer = document.getElementById('film-list');
const searchBtn = document.querySelector('button.film-search-btn');

for (let i = 0; i < films.length; i++) {
    const card = createElementWithAttributes('li', { class: 'film-card' });
    const figure = createElementWithAttributes('figure', { class: 'film-card-banner' });
    const img = createElementWithAttributes('img', { src: `Images/Movie/${films[i].picture}`, alt: `${films[i].title} képe`, 'data-source': 'A kép az IMDB hivatalos oldaláról származik.' });
    const wrapper = createElementWithAttributes('div', { class: 'film-title-wrapper' });
    const h3 = createElementWithAttributes('h3', { class: 'film-title' }, films[i].title);
    const date = createElementWithAttributes('time', { dateTime: `${films[i].year}` }, films[i].year);
    const data = createElementWithAttributes('div', { class: 'film-card-data' });
    const badge = createElementWithAttributes('div', { class: 'film-badge badge-outline' }, films[i].badge);
    const duration = createElementWithAttributes('div', { class: 'film-duration' }, `<i class="ri-time-line"></i>`);
    const time = createElementWithAttributes('time', {}, films[i].duration);
    const rating = createElementWithAttributes('div', { class: 'film-rating' }, `<i class="ri-star-line"></i> ${films[i].rating}`);
    //----
    filmContainer.append(card);
    card.append(figure, wrapper, data);
    figure.append(img);
    wrapper.append(h3, date);
    data.append(badge, duration, rating);
    duration.append(time);
};