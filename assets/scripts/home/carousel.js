const carouselLoop = setInterval(function() {
    let carousel = document.querySelector('.picture-carousel');
    if (Number(carousel.getAttribute('carousel-status') ?? 1) === carousel.querySelectorAll('.img-carousel').length) {
        carousel.scroll({left: 0, behavior: "smooth"});
        carousel.setAttribute('carousel-status', 1);
    } else {
        carousel.scroll({left: carousel.scrollLeft + window.innerWidth, behavior: "smooth"});
        carousel.setAttribute('carousel-status', Number(carousel.getAttribute('carousel-status') ?? 1) + 1);
    }
}, 3000);