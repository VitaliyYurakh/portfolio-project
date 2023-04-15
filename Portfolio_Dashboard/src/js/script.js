window.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.aside')
    const close = document.querySelector('.aside__close')

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('is-Show')
        menu.classList.toggle('is-Show')
    })

    close.addEventListener('click', () => {

        hamburger.classList.remove('is-Show')
        menu.classList.remove('is-Show')
    })
})