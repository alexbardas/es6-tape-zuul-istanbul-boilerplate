# es6-tape-zuul-istanbul-boilerplate [![Build Status](https://secure.travis-ci.org/alexbardas/es6-tape-zuul-istanbul-boilerplate)](http://travis-ci.org/alexbardas/es6-tape-zuul-istanbul-boilerplate)

The ideal stack for writing, running and measuring the coverage of unit tests in node and browsers in 2016.

## Main features:
- focus on the project you're building, not the testing tools
- super easy to integrate in any CI environment
- automatic es2015 support through [babel](https://babeljs.io/)
- minimal configuration (no complex setup, no extra karma, gulp (grunt) / jasmine (mocha) configuration)
- completely unopinionated about the build process (can be used with [webpack](https://webpack.github.io), [browserify](http://browserify.org) or any other build tools)

## Used libraries:

- [Tape](https://github.com/substack/tape) (writing unit tests)
- [Zuul](https://github.com/defunctzombie/zuul) (running tests in browsers)
- [Isparta](https://github.com/douglasduteil/isparta) (code coverage tool for es2015)
- [ESLint](https://github.com/eslint/eslint) (es2015 linter)

This stack can be used with the initial configuration straight away. All configuration is defined in:
- [.zuul.yml](https://github.com/defunctzombie/zuul/wiki/Zuul.yml)
- [.zuulrc](https://github.com/defunctzombie/zuul/wiki/Zuulrc)
- [.istanbul.yml](https://github.com/gotwarlost/istanbul/issues/3#issuecomment-31291272)
- [.eslintrc](http://eslint.org/docs/user-guide/configuring)

Configured to be used with es2015 by default. Also supports older versions of ecmascript.

## Usage

`npm test` // runs eslint on all files and runs all tests in node.js
`npm run test:browser` // uses provided `.zuul{.yml,rc}` configuration to run the tests in remote browsers
`npm run test:browser:local` // creates a server for running tests locally in any browser
`npm run coverage` // generates a code coverage report and returns an error code if coverage is below the specified threshold (as configured in `.istanbul.yml`)

[Electron-prebuilt](https://github.com/electron-userland/electron-prebuilt) is huge and is not included by default. Type the following commands to install and run headless tests locally:

```
npm install electron-prebuilt
npm run test:browser:headless
```

## Why tape?

Tape is a very simple testing framework, that needs no extra configuration.

tl/dr: While jasmine and karma are very popular alternatives for writing and running unit tests, they add a lot of extra complexity and are harder to setup. They promote bad practices (add global variables) and writing tests in tape is just quicker and easier.

Some very good articles which highlight tape's advantages are:

- https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.o4mdmbfnj
- https://ponyfoo.com/articles/testing-javascript-modules-with-tape
- http://www.macwright.org/2014/03/11/tape-is-cool.html

## Why zuul?

Zuul provides an easy way to test javascript in multiple browsers with almost no configuration. It has solid support, good documentation and is very easy to set up.

It requires a `.zuul.yml` file to define the browsers, versions and platforms which need to be supported by the tests and a `.zuulrc` file to specify the username / api key for testing remotely on 3rd party tools (e.g [Saucelabs](https://saucelabs.com)).

[Electron](http://electron.atom.io) should always be preferred instead of phantomjs for testing locally on a headless browser because it's much closer to a real browser and what users would actually use. Soon, the native [chrome headless mode](https://bugs.chromium.org/p/chromium/issues/detail?id=546953#c54) will replace both and this boilerplate will be updated to use it.

## Why isparta?

Isparta uses [istanbul](https://github.com/gotwarlost/istanbul) under the hood and it generates nice coverage reports for es2015 code. It is configurable via the `.istanbul.yml` configuration file.

## What about e2e Selenium testing?

It's out of the scope of this boilerplate to provide any guidance for e2e testing.

## License

MIT
