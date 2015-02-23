# Ghost Starter Kit

Based on the default theme for [Ghost](http://github.com/tryghost/ghost/).

This is a bare-bones starter kit for developing themes for the [Ghost](http://ghost.org/) blogging platform. It uses some very helpful utilities to make development a joy.

<img src="https://avatars0.githubusercontent.com/u/6200624" alt="Gulp" height="50">
<img src="https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67" alt="Bower" height="50">
<img src="http://lesscss.org/public/img/logo.png" alt="LESS" height="45">
<img src="https://babeljs.io/images/logo.svg" alt="Babel" height="45">
<img src="http://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" alt="Bootstrap 3" height="45">

- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [LESS](http://lesscss.org/)
- [Babel](https://babeljs.io/)
- [Twitter Bootstrap](http://getbootstrap.com/)*

*It's pre-configured to use [Bootstrap 3](http://getbootstrap.com/), but you can easily ditch it and use your library of choice.

It uses the same markup as the default theme that ships with Ghost, so it should contain examples of just about everything you can do with the [latest Ghost release](https://github.com/TryGhost/Ghost/releases).

Some very basic styles are applied, and there are a few JavaScript examples.

Babel lets us use [ES6 syntax](https://github.com/lukehoban/es6features), which is fun.

ES6 syntax is compiled to ES5 using [CommonJS](http://addyosmani.com/writing-modular-js/) modules, which are then [Browserified](http://browserify.org/) and [uglified](https://github.com/mishoo/UglifyJS).

## Installation

You'll need [Node.js and NPM](http://nodejs.org/). [Homebrew](http://brew.sh/) makes it very easy.

```
brew install node
```

After that, you'll need a few global Node.js packages for development.

```
npm install -g bower gulp
```

Once you've got Node.js, Bower and Gulp installed, you can install the project's dependencies by running

```
npm install
```

The install task will also install and update the project's Bower dependencies. You should run it if you've installed or upgraded any package using NPM or Bower.

## Development

After the project's dependencies are installed, start developing by running the default Gulp task:

```
gulp
```

This will start the JavaScript and LESS watchers and runs additional tasks on file changes. The browser will automatically reload with your latest JavaScript and CSS.

This task will automatically compile JavaScript and LESS files, which are ignored by git. You can now start Ghost and enable this theme to begin working on it.

All Gulp tasks are kept extremely fast by using in-memory file caches to avoid processing unchanged files. This means it uses a bit more memory, but it shouldn't be noticeable.

`CTRL + C` will stop the task.

### Copyright & License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
