/* =============== ADD MOIVES TO CONTAINER =============== */
let jelenlegi = 0;
let max = 19;
let alap = 5;
function addMovies() {
        let container = document.querySelector(".movies__container");
    for (var i = jelenlegi; i < alap; i++) {
        /* ===== CREATE MOVIE CARD ===== */
        let movieCard = document.createElement("div");
        movieCard.className = "movie-card" + " " + movies[i].filterGenre1 + " " + movies[i].filterGenre2 + " " + movies[i].year;
        // APPEND
        container.append(movieCard);
        /* ===== CREATE MOVIE HEADER ===== */
        let movieHead = document.createElement("div");
        movieHead.className = "card-head";
        let movieBody = document.createElement("div");
        movieBody.className = "card-body";
        // APPEND
        movieCard.append(movieHead, movieBody);
        /* ===== CREATE MOVIE OVERLAY ===== */
        let movieOverlay = document.createElement("div");
        movieOverlay.className = "card-overlay";

        let movieImg = document.createElement("img");
        movieImg.className = "card-img";
        movieImg.alt = movies[i].title;
        movieImg.src = 'assets/images/movies/'+ movies[i].picture;
        // APPEND
        movieHead.append(movieImg, movieOverlay);
        /* ===== CREATE MOVIE RATING/MORE INFORMATION ===== */
        let movieRating = document.createElement("div");
        movieRating.className = "rating";
        let movieMoreinfo = document.createElement("div");
        movieMoreinfo.className = "play";
        // APPEND
        movieOverlay.append(movieRating, movieMoreinfo)

        /* ===== CREATE MOVIE STAR ===== */
        let movieStarIcon = document.createElement("ion-icon");
        movieStarIcon.className = "md";
        movieStarIcon.className = "hydrated";
        movieStarIcon.setAttribute("name", "star-outline");
        movieStarIcon.setAttribute("role", "img");
        movieStarIcon.setAttribute("aria-label", "star outline");

        let movieRatingSpan = document.createElement("span");
        movieRatingSpan.innerHTML = movies[i].rating;
        movieRating.append(movieStarIcon, movieRatingSpan);

        /* ===== CREATE MOVIE PLAY APPENDS ===== */
        let movieAnchorTag = document.createElement("a");
        movieAnchorTag.setAttribute("href", "https://www.youtube.com/");
        let moviePlayIcon = document.createElement("ion-icon");
        moviePlayIcon.className = "md";
        moviePlayIcon.className = "hydrated";
        moviePlayIcon.setAttribute("name", "play-circle-outline");
        moviePlayIcon.setAttribute("role", "img");
        moviePlayIcon.setAttribute("aria-label", "play circle outline");
        movieMoreinfo.append(movieAnchorTag);
        movieAnchorTag.append(moviePlayIcon);

        /* ===== CREATE MOVIE BODY APPENDS ===== */
        let cardTitle = document.createElement("h3");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = movies[i].title;
        let cardInfo = document.createElement("div");
        cardInfo.className = "card-info";
        let cardGenre = document.createElement("span");
        cardGenre.className = "genre";
        let cardYear = document.createElement("span");
        cardYear.className = "year";
        cardInfo.append(cardGenre, cardYear);
        cardGenre.innerHTML = movies[i].genre;
        cardYear.innerHTML = movies[i].year;
        movieBody.append(cardTitle, cardInfo);

        if (i == max) {
            loadMore.classList.add("inactive");
        } else {
            loadMore.classList.remove("inactive");
        }
        if (i >= 6) {
            loadLess.classList.remove("inactive");
        } else {
            loadLess.classList.add("inactive");
        }
        }
    };
window.onload = addMovies;

const loadMore = document.getElementById('load-more');
const loadLess = document.getElementById('load-less');
if (loadMore) {
    loadMore.addEventListener('click', () => {
        jelenlegi += 5;
        alap += 5;
        addMovies();
    })
}

if (loadLess) {
    loadLess.addEventListener('click', () => {
        jelenlegi = 0;
        alap -= 5;
        const dltContainer = document.querySelector('.movies__container');
        dltContainer.remove();
        let crtContainer = document.createElement('div');
        crtContainer.className = "movies__container";
        const mvsContainer = document.querySelector('.motha');
        mvsContainer.append(crtContainer);
        addMovies();
    })
}


//-----------------------------------------------------------
        $(document).ready(function () {
            $('.list').click(function () {
                const value = $(this).attr('data-filter');
                if (value == 'all') {
                    $('.movie-card').show('10000');
                } else {
                    $('.movie-card').not('.' + value).hide('10000');
                    $('.movie-card').filter('.' + value).show('10000');
                }
            })

            $('.list').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            })
        })

        $(document).ready(function () {
            $('.year').click(function () {
                const value = $(this).attr('data-filter');
                if (value == 'all') {
                    $('.movie-card').show('10000');
                } else {
                    $('.movie-card').not('.' + value).hide('10000');
                    $('.movie-card').filter('.' + value).show('10000');
                }
            })

            $('.year').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            })
        })