$( document ).ready(function() {
    function addSlider(elementClass, settings ) {
        $(elementClass).slick(settings)
    }

    addSlider('.sec-promo__slider', {
        dots: true,
        arrows: false,
        dotsClass: 'dots'
    })

    addSlider('.category', {
        dots: true,
        prevArrow: '<button type="button" class="arrow arrow_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow_next"></button>',
        dotsClass: 'dots dots_category',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    addSlider('.products', {
        infinite: false,
        prevArrow: '<button type="button" class="arrow arrow_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow_next"></button>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    addSlider('.reading', {
        infinite: false,
        prevArrow: '<button type="button" class="arrow arrow__reading arrow__reading_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow__reading arrow__reading_next"></button>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    addSlider('.product-images__slider', {
        prevArrow: '<button type="button" class="arrow arrow__product arrow__product_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow__product arrow__product_next"></button>'
    })
});

function addClass(element, className) {

    element.classList.add(className)
}

function removeClass(element, className) {

    element.classList.remove(className)
}


// реализация ссылок
const dataUrl = document.querySelectorAll('[data-url]')
const cardInfo = document.querySelectorAll('.card__info')

dataUrl.forEach(item => {

    item.addEventListener('click', () => {

        location.href = `https://vitaliyyurakh.github.io/green_page/` + `${item.dataset.url}`
    })
})

cardInfo.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation()
    })
})

// реализация табов

const filterHead = document.querySelectorAll('.filter__head')


filterHead.forEach( item => {

    item.addEventListener('click', () => {

        item.parentElement.classList.toggle('is-Active')
    })
})



// реализация поиска

const searchOpen = document.querySelector('#search-open')
const searchClose = document.querySelector('#search-close')
const searchField = document.querySelector('#search-field')
const isShow = 'is-Show'



searchOpen.addEventListener('click', () => {

    removeClass(searchOpen, isShow)
    addClass(searchClose, isShow)
    addClass(searchField, isShow)
})

searchClose.addEventListener('click', event => {

    removeClass(searchClose, isShow)
    removeClass(searchField, isShow)
    addClass(searchOpen, isShow)
})
