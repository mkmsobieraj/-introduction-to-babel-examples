# introduction-to-babel-examples
Babel do not check for us types, we need to do it on our own. This example shows
simple use case of babel to transpile code and typescript compiler for type checking.

# Description

- `tsc --noEmit` - we set `noEmit` flag because, we do not need code compilation (babel do it for us), only type checking
- `tsc --emitDeclarationOnly` - we want only output d.ts files
- `babel src --out-dir dist --extensions \".ts,.tsx\" --source-maps inline"` - 
- `tsconfig.json > "jsx": "react"` - controls jsx handling by typescript 
- `tsconfig.json > "declaration": true` - we want to generate d.ts files