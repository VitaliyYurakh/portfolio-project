new WOW().init();

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const menuCLose = document.querySelector('.menu__close')
const menuLink = document.querySelectorAll('.links__link')

function removeMenu() {

    menu.classList.remove('menu_active')
    document.body.style.overflowY = 'scroll'
}

menuLink.forEach(item => {

    item.addEventListener('click', () => {

        removeMenu()
    })
})

hamburger.addEventListener('click', () => {

    menu.classList.add('menu_active')
    document.body.style.overflowY = 'hidden'
})

menuCLose.addEventListener('click', () => {

    removeMenu()
})