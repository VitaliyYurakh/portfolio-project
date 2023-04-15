import Page from './init'
import Hamburger from "./views/hamburger";

window.addEventListener('DOMContentLoaded', () => {

    new Page()
    new Hamburger('.hamburger', '.menu')

})