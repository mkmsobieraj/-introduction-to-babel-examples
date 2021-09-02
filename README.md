# introduction-to-babel-examples
Examples for introduction-to-babel project

# Description

## Commands
Execute following commands to see what output will be created by babel. Note that when we run one plugin
only part of the syntax is converted to ES5 compatible version of javascript. To make it work you have to comment `babel.config.json`
temporally.
```
./node_modules/.bin/babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions
./node_modules/.bin/babel src --out-dir dist --plugins=@babel/plugin-transform-spread
./node_modules/.bin/babel src --out-dir dist --plugins=@babel/plugin-transform-template-literals
```
On the other side, when we call 

```
./node_modules/.bin/babel src --out-dir dist 
```

`babel.config.json` will be detected, and all three plugins will be executed.
