# file-resolve

Resolve file by path and extensions

## Install

```bash
yarn add file-resolve
# or
npm i file-resolve
```

## Usage

```js
import fileResolve from "file-resolve";

fileResolve("file/path"); // file/path/index.ts

fileResolve.extensions([".css"])("file/path"); // file/path/index.css
```

## API

```js
interface fileResolve {
  (p: string): string;
  extensions(extensions: string[]): any; // default [".js", ".jsx", ".ts", ".tsx"]
}
```
