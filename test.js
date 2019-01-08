

const Path = require('path');
const BuildLib = require(Path.join(__dirname, 'index.js'));


let matcher = /^\w+Controller$/;
let path = '/home/pilot/Programmadores/slackjockey/dorkus-malorkus-site/controllers';

let lib = BuildLib.fromPath(path, matcher);

console.log("");
console.log("");
console.log(lib);
