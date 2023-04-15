export default class Hamburger {
    constructor(elemOpenMenu, menu) {
        this.openMenu = document.querySelector(elemOpenMenu)
        this.menu = document.querySelector(menu)
        this.handlers()
    }

    handlers() {
        this.openMenu.addEventListener('click', () => {
            this.menu.classList.add('is-Active')
        })

        this.menu.addEventListener('click', ({ target }) => {
            if (
                target.classList.contains('menu__close') ||
                target.classList.contains('nav__link')
            ) {
                this.menu.classList.remove('is-Active')
            }
        })
    }
}