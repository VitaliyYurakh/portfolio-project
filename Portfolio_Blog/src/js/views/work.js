import pageMap from "../config/config";

export default class Work {
    constructor() {
        this.workELements = document.querySelectorAll('[data-index]')
        this.handlers()
    }

    handlers() {
        this.workELements.forEach(el => el.addEventListener('click', () => this.goToDetailsPage(el)))
    }

    goToDetailsPage(el) {
        const id = el.dataset.index

        localStorage.setItem('id', id)

        location.href = pageMap.details
    }
}