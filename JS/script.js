// ========== PAGE NAVIGATION ==========
const navigationLinks = document.querySelectorAll('[data-nav-link]');

function activeLink() {
    navigationLinks.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
        document.querySelectorAll('[data-page]').forEach(page => {
            if (page.getAttribute('data-page') === this.getAttribute('data-nav-link')) page.classList.add('active');
            else page.classList.remove('active');
        });
        window.scrollTo(0, 0);
    });
};

navigationLinks.forEach(link => link.addEventListener('click', activeLink));

// ========== CLOCK ==========
setInterval(() => {
    let day = new Date();
    document.getElementById('hr').style.transform = `rotateZ(${(day.getHours() * 30) + (day.getMinutes() / 2)}deg)`;
    document.getElementById('mn').style.transform = `rotateZ(${day.getMinutes() * 6}deg)`;
    document.getElementById('sc').style.transform = `rotateZ(${day.getSeconds() * 6}deg)`;
});

// ========== ELEMENT CREATOR FUNCTION ==========
function createElementWithAttributes(tag, attributes, innerHTML) {
    const element = document.createElement(tag);
    for (const attribute in attributes) element.setAttribute(attribute, attributes[attribute]);
    if (innerHTML !== undefined) element.innerHTML = innerHTML;
    return element;
};

// ========== TEAM ==========
for (let i = 0; i < team.length;i++) {
    const card = createElementWithAttributes('div', { class: 'team-card' });
    const img = createElementWithAttributes('img', { class: 'team-img', src: `Images/Team/${team[i].picture}`, alt: `${team[i].alt}` });
    const h3 = createElementWithAttributes('h3', { class: 'team-title team-modal-button' }, team[i].name);
    const icon = createElementWithAttributes('i', { class: 'ri-arrow-right-s-line' });
    const span = createElementWithAttributes('span', { class: 'team-subtitle' }, `${team[i].icon} ${team[i].role}`);
    document.querySelector('.team-container').append(card);
    card.append(img, h3, span);
    h3.append(icon);
};

document.querySelectorAll('.team-modal-button').forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        document.querySelector('.team-modal-title').innerHTML = `${team[i].name} bemutatkozása!`;
        document.querySelector('.team-modal-description').innerHTML = team[i].introduction;
        document.querySelector('.team-modal').classList.add('active-modal');
    });
});

document.querySelector('.team-modal-close').addEventListener('click', () => {
    document.querySelector('.team-modal').classList.remove('active-modal')
});

// ========== LANGUAGES ==========
for (let i = 0; i < lang.length;i++) {
    const card = createElementWithAttributes('div', { class: 'lang-data' });
    const blob = createElementWithAttributes('div', { class: 'lang-blob' });
    const img = createElementWithAttributes('img', { src: `Images/Languages/${lang[i].picture}`, alt: `${lang[i].alt}` });
    const h3 = createElementWithAttributes('h3', { class: 'lang-name' }, lang[i].name);
    const span = createElementWithAttributes('span', { class: 'lang-subtitle' }, lang[i].level );
    document.querySelector('.lang-info').append(card);
    card.append(blob, h3, span);
    blob.append(img);
};

// ========== SLIDER ==========


// ========== COUNTER ==========
counter.forEach((count) => {
    const box = createElementWithAttributes('div', { class: 'film-counter-box' });
    const span = createElementWithAttributes('span', {});
    const icon = createElementWithAttributes('i', { class: count.icon });
    const h2 = createElementWithAttributes('h2', { 'data-val': count.count }, '00');
    const p = createElementWithAttributes('p', {}, count.name);
    document.querySelector('.film-counter-container').append(box);
    box.append(span, icon, h2, p);
});

function startCounter() {
    document.querySelectorAll('.film-counter-box h2').forEach((counter) => {
        let startValue = 0;
        let endValue = parseInt(counter.getAttribute('data-val'));
        setInterval(function () {
            startValue += 1;
            counter.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(this);
            }
        }, Math.floor(4000 / endValue));
    });
}

// ========== TOP-RATED ==========
films.sort((a, b) => b.rating - a.rating);
const topRated = films.slice(0, 3);

for (let i = 0; i < topRated.length;i++) {
    const card = createElementWithAttributes('li', { class: 'film-card' });
    const figure = createElementWithAttributes('figure', { class: 'film-card-banner' });
    const img = createElementWithAttributes('img', { src: `Images/Movie/${topRated[i].picture}`, alt: `${topRated[i].title} képe`, 'data-source': 'A kép az IMDB hivatalos oldaláról származik.' });
    const wrapper = createElementWithAttributes('div', { class: 'film-title-wrapper' });
    const h3 = createElementWithAttributes('h3', { class: 'film-title', id: topRated[i].id }, `${topRated[i].title} <i class="ri-arrow-turn-forward-line"></i>`);
    const date = createElementWithAttributes('time', { dateTime: `${topRated[i].year}` }, topRated[i].year);
    const data = createElementWithAttributes('div', { class: 'film-card-data' });
    const badge = createElementWithAttributes('div', { class: 'film-badge badge-outline' }, topRated[i].badge);
    const duration = createElementWithAttributes('div', { class: 'film-duration' }, `<i class="ri-time-line"></i>`);
    const time = createElementWithAttributes('time', {}, topRated[i].duration);
    const rating = createElementWithAttributes('div', { class: 'film-rating' }, `<i class="ri-star-line"></i> ${topRated[i].rating}`);
    document.getElementById('film-top-rated-list').append(card);
    card.append(figure, wrapper, data);
    figure.append(img);
    wrapper.append(h3, date);
    data.append(badge, duration, rating);
    duration.append(time);
};

// ========== FILM CARD CREATOR ==========
function addFilms(filteredFilms) {
    filteredFilms.forEach((film) => {
        const card = createElementWithAttributes('li', { class: 'film-card' });
        const figure = createElementWithAttributes('figure', { class: 'film-card-banner' });
        const img = createElementWithAttributes('img', { src: `Images/Movie/${film.picture}`, alt: `${film.title} képe`, 'data-source': 'A kép az IMDB hivatalos oldaláról származik.' });
        const wrapper = createElementWithAttributes('div', { class: 'film-title-wrapper' });
        const h3 = createElementWithAttributes('h3', { class: 'film-title', id: film.id }, `${film.title} <i class="ri-arrow-turn-forward-line"></i>`);
        const date = createElementWithAttributes('time', { dateTime: `${film.year}` }, film.year);
        const data = createElementWithAttributes('div', { class: 'film-card-data' });
        const badge = createElementWithAttributes('div', { class: 'film-badge badge-outline' }, film.badge);
        const duration = createElementWithAttributes('div', { class: 'film-duration' }, `<i class="ri-time-line"></i>`);
        const time = createElementWithAttributes('time', {}, film.duration);
        const rating = createElementWithAttributes('div', { class: 'film-rating' }, `<i class="ri-star-line"></i> ${film.rating}`);
        filmContainer.append(card);
        card.append(figure, wrapper, data);
        figure.append(img);
        wrapper.append(h3, date);
        data.append(badge, duration, rating);
        duration.append(time);
    });
}

// ========== FILTER ==========
categories.sort((a, b) => a.name.localeCompare(b.name));
for (let i = 0; i < categories.length; i++) {
    const li = createElementWithAttributes('li', {});
    const input = createElementWithAttributes('input', { title: 'Ez egy kétállapotú gomb: ✅, ⚊', type: 'button', id: categories[i].type, class: 'film-filter-btn', value: '⚊' });
    const label = createElementWithAttributes('label', { for: categories[i].type }, categories[i].name);
    document.querySelector('.film-filter-list').append(li);
    li.append(input, label);
};

document.querySelectorAll('.film-filter-btn').forEach((item) => {
    item.addEventListener('click', () => {
        switch (item.value.charAt(0)) {
            case '\u268A':
                item.value = '\u2705';
                break;
            case '\u2705':
                item.value = '\u268A';
                break;
            default:
                alert(item.value);
        }
    });
});

const filmContainer = document.getElementById('film-list');

document.querySelector('.film-search-btn').addEventListener('click', () => {
    const filteredFilms = films.filter(film => {
        return Array.from(document.querySelectorAll('.film-filter-btn')).some(input => {
            return input.value === '\u2705' && film.filter.includes(input.getAttribute('id'));
        });
    });

    filmContainer.innerHTML = '';
    if (filteredFilms.length === 0)
        filmContainer.append(createElementWithAttributes('p', { class: 'film-not-found' }, `Sajnos a megadott kategóriákkal nem találtunk filmet! :(`));
    else addFilms(filteredFilms);
});

// ========== SEARCH ==========
document.querySelector('.film-search-input').addEventListener('input', function() {
    setTimeout(() => {
        const searchValue = this.value.toLowerCase();

        if (searchValue === '') {
            filmContainer.innerHTML = '';
            return;
        }
        const filteredFilms = films.filter((film) => film.title.toLowerCase().includes(searchValue));

        filmContainer.innerHTML = '';
        if (filteredFilms.length === 0) 
            filmContainer.append(createElementWithAttributes('p', { class: 'film-not-found' }, `Sajnos a(z) '${searchValue}' címmel nem találtunk filmet! :(`));
        else addFilms(filteredFilms);
        document.querySelectorAll('.film-filter-btn').forEach((input) => input.value = '⚊');
    }, 500);
});

// ========== FILM MODAL ==========
function showData(film) {
    document.querySelector('.films-modal-title').innerHTML = film.title;
    document.querySelector('.films-modal-information .film-badge').innerHTML = film.badge;
    document.querySelector('.films-modal-information .film-duration').innerHTML = `<i class="ri-time-line"></i><time>${film.duration}</time>`;
    document.querySelector('.films-modal-information .film-rating').innerHTML = `<i class="ri-star-line"></i> ${film.rating}`;
    document.querySelector('.films-modal-information .film-year').innerHTML = `<i class="ri-calendar-line"></i> ${film.year}`;
    document.querySelector('.films-modal-img').src = `Images/Movie/${film.picture}`;
    document.querySelector('.films-modal-img').alt = `${film.picture} képe`;
    document.querySelector(".film-modal-only").innerHTML = film.filter.map(filterType => {
        return categories.find(category => category.type === filterType);
    }).filter(match => match).map(match => `<p>${match.name}</p>`).join(' ');
    document.querySelector(".film-description").innerHTML = film.description;
}

document.querySelectorAll('.film-container').forEach((container) => {
    container.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('film-title')) {
            showData(films.find(film => film.id === parseInt(clickedElement.getAttribute('id'))));
            document.querySelector('.films-modal').classList.add('active-modal');
        }
    });
});

document.querySelector('.films-modal-close').addEventListener('click', () => {
    document.querySelector('.films-modal').classList.remove('active-modal');
});