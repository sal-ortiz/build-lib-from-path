# build-lib-from-path
A simple tool that takes a base path and an optional string/regex matcher as arguments and create a library based on the flies within the given base path.



## Getting Started
### Installation:
```
npm install --save build-lib-from-path
```

### Usage:
```
const BuildLib = require('build-lib-from-path');

let path = './controllers';   // a target lib folder.

let lib = BuildLib.fromPath(path);

```
will recursively load all the modules in the given path, arranging them within the returned object per their directory structure.

If you want to filter by class name, you can use a regex or a string matcher.

```
const BuildLib = require('build-lib-from-path');

let path = './controllers';       // a target lib folder.
let matcher = /^\w+Controller$/;  // catch only Controller classes.

let lib = BuildLib.fromPath(path, matcher);
```
will cause the output to be filtered by the given string or regex, applied to the imported class' name.
