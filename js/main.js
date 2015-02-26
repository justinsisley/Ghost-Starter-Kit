document.getElementsByTagName('html')[0].classList.remove('no-js');

import settings from './constants/settings';
import $ from '../../bower_components/jquery/dist/jquery';

class App {
    constructor(options) {
        this.options = options;
    }
}

var app = new App(settings);
console.log(app);

var $body = $('body');
console.log($body);