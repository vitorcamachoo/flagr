## Install

```
$ npm install --save flagr
```


## Usage

### Check if a given flag exists
```
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
```
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
