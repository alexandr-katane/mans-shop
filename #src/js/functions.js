function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            if (ibg[i].classList.contains('home__back')) {
                ibg[i].style.backgroundImage = 'linear-gradient(0deg, rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.5)),url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
            if (ibg[i].classList.contains('season__back') || ibg[i].classList.contains('collection__back')) {
                ibg[i].style.backgroundImage = 'linear-gradient(0deg, rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.5)),url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
            if (ibg[i].classList.contains('footer__back')) {
                ibg[i].style.backgroundImage = 'linear-gradient(0deg, rgba(15, 15, 15, 0.85), rgba(15, 15, 15, 0.85)),url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}

ibg();

