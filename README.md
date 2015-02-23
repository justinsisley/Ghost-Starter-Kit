# Ghost Starter Kit

Based on the default theme for [Ghost](http://github.com/tryghost/ghost/).

## Installation

You'll need [Node.js and NPM](http://nodejs.org/). [Homebrew](http://brew.sh/) makes it very easy.

```
brew install node
```

After that, you'll need a few global Node.js packages for development. Feel free to read about them before installing. ([Bower](http://bower.io/), [Gulp](http://gulpjs.com/))

```
npm install -g bower gulp
```

Once you've got Node.js, Bower and Gulp installed, you can install the project's dependencies by running

```
gulp install
```

After the project's dependencies are installed, start developing by running

```
gulp
```

This will start the JavaScript and LESS watchers and runs tasks on changes. The browser will automatically reload.

This task will automatically compile JavaScript and LESS files, which are ignored by git. You can now start Ghost and enable this theme to begin working on it.

### Copyright & License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
