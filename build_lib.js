
const Path = require('path');
const FS = require('fs');



class BuildLib {

  static fromPath(targPath, matcher) {
    let controllers = {};

    let data = FS.readdirSync(targPath);

    for (let idx = 0; idx < data.length; idx++) {
      let name = data[idx];
      let path = Path.join(targPath, name);
      let entry = FS.lstatSync(path);

      if (entry.isDirectory()) {
        let contents = this.fromPath(path, matcher);

        if (contents && !this.isEmpty(contents)) {
          controllers[name] = contents;
        }

      } else if (entry.isFile() && name[0] != '.') {
        let contents = require(path);

        if (contents.name && (!matcher || contents.name.match(matcher))) {
          controllers[contents.name] = contents;
        }

      }

    }

    return controllers;
  }

  static isEmpty(obj) {
    return Object.keys(obj).length < 1;
  }

}


module.exports = BuildLib;
