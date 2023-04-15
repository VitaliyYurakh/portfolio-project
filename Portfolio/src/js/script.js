window.addEventListener('DOMContentLoaded', () => {

    const setPercent = () => {
        const skillsBoxes = document.querySelectorAll('.skills__box')

        skillsBoxes.forEach(box => {

            const skillsPercent = box.querySelector('.skills__percent')
            const skillsRange = box.querySelector('.skills__range')

            skillsRange.style.width = skillsPercent.textContent
        })
    }

    const filter = () => {

        const portfolioFilter = document.querySelector('.portfolio__filter')
        const portfolioItems = portfolioFilter.querySelectorAll('.portfolio__item')
        const portfolioProjects = document.querySelectorAll('.portfolio__project')

        portfolioFilter.addEventListener('click', e => {

            const { target } = e

            if (target && target.classList.contains('portfolio__item')) {

                removeActiveClass(portfolioItems)
                addActiveClass(target)
                showProject(target.dataset.filter)
            }
        })

        function removeActiveClass(arrayElements) {

            arrayElements.forEach(item => {
                item.classList.remove('is-Active')
            })
        }

        function addActiveClass(item) {
            item.classList.add('is-Active')
        }

        function showProject(attr) {

            removeActiveClass(portfolioProjects)

            portfolioProjects.forEach(item => {

                if (item.classList.contains(attr)) {
                    addActiveClass(item)
                }
            })
        }
    }

    const text = () => {
        let typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 100,
            startDelay: 500,
            backSpeed: 50,
            loop: true
        });
    }

    const removeButton = () => {

        const form = document.querySelector('#form')
        const button = form.querySelector('#submit')

        const buttonShow = () => {
            button.style.opacity = '1'
            button.style.visibility= 'visible'
        }

        form.addEventListener('submit', () => {
            button.style.opacity = '0'
            button.style.visibility= 'hidden'

            setTimeout( buttonShow, 2000)
        })
    }

    const menuShow = () => {

        const hamburger = document.querySelector('.hamburger')
        const menu = document.querySelector('.menu')

        hamburger.addEventListener('click', () => {
            menu.classList.add('is-Active')
        })

        menu.addEventListener('click', e => {
            const { target } = e

            if (target.classList.contains('menu__close') || target.classList.contains('nav__link')) {
                menu.classList.remove('is-Active')
            }
        })
    }

    setPercent()
    filter()
    text()
    removeButton()
    menuShow()
})