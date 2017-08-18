# Angular components for WebGL scenes using Cesiumjs
[![Build Status](https://travis-ci.org/Ventrom/Ventrom/ng2-cesiumjs.svg?branch=master)](https://travis-ci.org/Ventrom/Ventrom/ng2-cesiumjs)
[![npm version](https://badge.fury.io/js/ng2-cesiumjs.svg)](http://badge.fury.io/js/ng2-cesiumjs)
[![devDependency Status](https://david-dm.org/Ventrom/Ventrom/ng2-cesiumjs/dev-status.svg)](https://david-dm.org/Ventrom/Ventrom/ng2-cesiumjs#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/Ventrom/Ventrom/ng2-cesiumjs.svg)](https://github.com/Ventrom/Ventrom/ng2-cesiumjs/issues)
[![GitHub stars](https://img.shields.io/github/stars/Ventrom/Ventrom/ng2-cesiumjs.svg)](https://github.com/Ventrom/Ventrom/ng2-cesiumjs/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Ventrom/Ventrom/ng2-cesiumjs/master/LICENSE)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

A collection of Angular2 components to render WebGL scenes using Cesiumjs

## Installation

Install through npm:
```
npm install --save ng2-cesiumjs
```

To use the module, first import it in your app:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CesiumjsModule } from 'ng2-cesiumjs';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        Ng2CesiumjsModule
    ],
    declarations: [],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://Ventrom.github.io/Ventrom/ng2-cesiumjs/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT
