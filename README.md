Get all flags present on argv and his value easily Check if argv has a specific flag



[![npm version](https://badge.fury.io/js/flagr.svg)](https://badge.fury.io/js/flagr)
[![Dependency Status](https://img.shields.io/david/vitorcamachoo/flagr.svg)](https://david-dm.org/vitorcamachoo/flagr)
[![David](https://img.shields.io/david/dev/vitorcamachoo/flagr.svg)]()
[![npm](https://img.shields.io/npm/dm/flagr.svg?maxAge=2592000)]()

## Install

```sh
$ npm install --save flagr
```


## Usage

### Check if a given flag exists

```sh
$ node foo.js --prod --watch --env="production"
```

```js
// foo.js
const { exist } = require('flagr');

exist('--prod');
//=> true

exist('prod');
//=> true

exist('--watch');
//=> true

exist('--env');
//=> true

exist('--test');
//=> false

```

### Retrieve flag value

```sh
$ node foo.js --prod --watch="true" --env="production"
```

```js
// foo.js
const { get } = require('flagr');

get('--prod');
//=> ''

get('--watch');
//=> true

get('--env');
//=> production

get('env');
//=> production
```

## API

### exist(flag, [argv])

Returns a boolean whether the flag exists.

#### flag

Type: `string`

CLI flag to look for. The `--` prefix is optional.

#### argv

Type: `array`<br>
Default: `process.argv`

### get(flag, [argv])

Returns the value from flag.

#### flag

Type: `string`

CLI flag to look for. The `--` prefix is optional.

#### argv

Type: `array`<br>
Default: `process.argv`
