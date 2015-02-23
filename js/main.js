document.getElementsByTagName('html')[0].classList.remove('no-js');

import settings from './constants/settings';

class App {
    constructor(options) {
        this.options = options;
    }
}

var app = new App(settings);

console.log(app);