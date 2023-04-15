import getWork from "../services/getWork";

export default class Details {
    constructor() {
        this.render()
    }

    async render() {
        try {
            const res = await getWork()
            this.showContent(res)
        } catch (err) {
            this.showError(err)
        }
    }

    showContent({date, title, img, type, description}) {
        const workContent = document.querySelectorAll('[data-work]')

        workContent.forEach(el => {
            switch (el.dataset.work) {
                case 'title':
                    el.textContent = title
                    break
                case 'date':
                    el.textContent = date
                    el.value = date
                    break
                case 'type':
                    el.textContent = type
                    break
                case 'img':
                    el.src = img
                    break
                case 'description':
                    el.textContent = description
                    break
            }
        })
    }

    showError(err) {
        const container = document.querySelector('.work-details .container')
        container.textContent = err
    }
}