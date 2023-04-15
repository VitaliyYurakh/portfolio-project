window.addEventListener('DOMContentLoaded', () => {

    const apartmentTabs = document.querySelectorAll('.apartment__item')
    const apartmentSlide = document.querySelectorAll('.apartment__slide')

    function removeClassActive (arr) {
        arr.forEach(item => {
            item.classList.remove('is-Active')
        })
    }

    function addClassActive (arr, i) {
        arr[i].classList.add('is-Active')
    }

    apartmentTabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {

            removeClassActive(apartmentTabs)
            removeClassActive(apartmentSlide)

            addClassActive(apartmentTabs, i)
            addClassActive(apartmentSlide, i)
        })
    })
})