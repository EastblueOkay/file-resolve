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
fileResolve("file/path", [".css"]); // file/path/index.css
```

## API

```js
fileResolve(path: string, extensions: string[] = [".js", ".jsx", ".ts", ".tsx"])
```
