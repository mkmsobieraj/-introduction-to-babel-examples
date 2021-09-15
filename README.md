# introduction-to-babel-examples

Examples for introduction-to-babel project

# Description

We are going to use 3 presets

- `@babel/env` - with allow us to use the latest JavaScript features
- `@babel/preset-typescript`
- `@babel/preset-react`

In examples, we set some of the more popular presets available options.

In `dist-*` folders, you can see results of executing the following command.

```
./node_modules/.bin/babel src-js --out-dir dist-js
./node_modules/.bin/babel --extensions '.ts' src-ts --out-dir dist-ts
./node_modules/.bin/babel --extensions '.tsx' src-tsx --out-dir dist-tsx
```

Notice, that we set some options for `@babel/env` in `babel.config.js`.
(try to experiment with browsers to find out how transpiled files will be differing)

- `targets` - we specify relevant for our application versions of web browsers.
  Babel transpile code, to compatible version of JavaScript
- `useBuiltIns` - says babel to polyfill code
- `corejs` - says babel, which version of `corejs` should use when performing polyfill

Moreover, notice how babel use `corejs` to polyfill JavaScript code.
