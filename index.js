
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

        if (contents && Object.keys(contents).length > 0) {
          controllers[name] = contents;
        }

      } else if (entry.isFile() && name[0] != '.') {
        let contents = require(path);

        if (!matcher || contents.name.match(matcher)) {
          controllers[contents.name] = contents;
        }

      }

    }

    return controllers;
  }

}


module.exports = BuildLib;
