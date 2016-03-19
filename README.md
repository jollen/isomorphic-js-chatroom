# isomorphic-js

A simple project template for developing isomorphic JavaScript application (Browserify).

## Introduction

See:

* [src/index.js](src/index.js)
* [WebSocket Client in Browser](https://tonicdev.com/jollen/56ecb25484ccdd11001ee412)

## Usage

If you need to modify the source code, please run ```$ npm install``` to install dependencies before editing the code.

Please open the main file ```src/index.js``` and modify the code. When finish it, please compile ```src/index.js``` with browserify.

```
$ gulp apps
```

The output file is ```dist/index.js```. 

More gulp tasks:

* ```gulp watch``` for watching file changes
* ```gulp browser``` for opening ```dist/index.html``` in a browser and sync with browser

## License

Apache License
