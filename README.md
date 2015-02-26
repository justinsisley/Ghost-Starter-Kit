# Ghost Starter Kit

Based on the default theme for [Ghost](http://github.com/tryghost/ghost/).

This is a bare-bones starter kit for developing themes for the [Ghost](http://ghost.org/) blogging platform. It uses some very helpful utilities to make development a joy.

<img src="https://avatars0.githubusercontent.com/u/6200624" alt="Gulp" height="50">
<img src="https://www.npmjs.com/static/images/npm-logo.svg" alt="NPM" height="45">
<img src="http://lesscss.org/public/img/logo.png" alt="LESS" height="45">
<img src="https://babeljs.io/images/logo.svg" alt="Babel" height="45">
<img src="http://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" alt="Bootstrap 3" height="45">

- [Gulp](http://gulpjs.com/)
- [NPM](https://www.npmjs.com/)
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
npm install -g gulp
```

Once you've got Node.js and Gulp installed, you can install the project's dependencies by running

```
npm install
```

## Development

After the project's dependencies are installed, start developing by running the default Gulp task:

```
gulp
```

This will start the JavaScript and LESS watchers and runs additional tasks on file changes. The browser will automatically reload with your latest JavaScript and CSS.

This task will automatically compile JavaScript and LESS files, which are ignored by git. You can now start Ghost and enable this theme to begin working on it.

All Gulp tasks are kept extremely fast by using in-memory file caches to avoid processing unchanged files. This means it uses a bit more memory, but it shouldn't be noticeable.

`CTRL + C` will stop the task.

## Distributing Your Theme

A handy Gulp task will create versioned release archives in the `dist` directory. All development files and folders will be stripped from this archive. JavaScript and CSS will be minified, and images will be compressed.

The archives that are produced can be unzipped and dropped into any Ghost installation's theme directory, then enabled from the blog settings page.

Build Type | Command
:----------|:--------
Build a patch release, _e.g. 0.0.1_ | `gulp release`
Build a minor release, _e.g. 0.1.0_ | `gulp release-minor`
Build a major release, _e.g. 1.0.0_ | `gulp release-major`


### Copyright & License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
