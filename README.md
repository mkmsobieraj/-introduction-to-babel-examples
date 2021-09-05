# Description

We going to use 3 presets
- `@babel/env` - with allow us to use latest js features
- `@babel/preset-typescript`
- `@babel/preset-react`

In examples we set some of more popular presets available options.

In dist-* folders you can see results of executing following command

```
./node_modules/.bin/babel src-js --out-dir dist-js
./node_modules/.bin/babel --extensions '.ts' src-ts --out-dir dist-ts
./node_modules/.bin/babel --extensions '.tsx' src-tsx --out-dir dist-tsx
```

Notice, that we set some options for `@babel/env` in `babel.config.js` 
(try to experiment with browsers to find out how transpiled filles will be differ)

- `targets` - we specify relevant for our application versions of web browsers. 
Babel transpile code, to compatible version of javascript
- `useBuiltIns` - says babel to polyfill code
- `corejs` - says babel witch version of `corejs` should use when performing polyfill

Moreover notice how babel use `corejs` to polyfill js code.