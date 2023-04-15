import pageMap from "./config/config";
import Work from "./views/work";
import Details from "./views/pageDetails";
export default class Page {
    constructor() {
        this.location(pageMap)
    }

    location({works, home, details, blog}) {
        const nowPage = location.href

        switch (nowPage) {
            case home:
                this.home()
                return
            case works:
                this.works()
                return
            case blog:
                this.blog()
                return
            case details:
                this.details()
                return
        }
    }

    home() {
        new Work()
        // new Slider()
        // new Modal()
    }

    works() {
        new Work()
    }

    blog() {
        // new Modal()
    }

    details() {
        new Details()
    }
}