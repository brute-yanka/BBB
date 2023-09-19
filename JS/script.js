// ========== PAGE NAVIGATION ==========
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function activatePage(pageId) {
    pages.forEach(page => {
        if (page.getAttribute("data-page") === pageId) page.classList.add("active");
        else page.classList.remove("active");
        
    });
}

function activeLink() {
    navigationLinks.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
        activatePage(this.getAttribute("data-nav-link"));
    });
}

navigationLinks.forEach(n => n.addEventListener("click", activeLink));

// ========== CLOCK ==========
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
        
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

// ========== SLIDER ==========
let ProjectsSwiper = new Swiper(".gallery-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56
        }
    }
});

// ========== SLIDER ==========
const modalViews = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-button');
const modalCloses = document.querySelectorAll('.modal-close');

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modalViews[i].classList.add('active-modal');
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// ========== MOVIE CATEGORY ==========
const tristateBtn = document.querySelectorAll(".film-filter-btn");

tristateBtn.forEach((item) => {
    item.addEventListener("click", () => {
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
    }) 
});