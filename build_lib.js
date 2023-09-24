
const Path = require('path');
const File = require('fs');


class BuildLib {

  static fromPath(targPath, matcher) {
    let outpObj = {};

    let data = File.readdirSync(targPath);

    for (let idx = 0; idx < data.length; idx++) {
      let name = data[idx];
      let path = Path.join(targPath, name);
      let entry = File.lstatSync(path);

      if (entry.isDirectory()) {
        let contents = BuildLib.fromPath(path, matcher);

        if (!outpObj[name] && !BuildLib.isEmpty(contents)) {
          let humanName = name[0].toUpperCase() + name.slice(1);

          outpObj[humanName] = contents;
        }

      } else if (entry.isFile() && !BuildLib.isDotFile(name)) {
        let contents = require(path);

        if (contents.name && (!matcher || contents.name.match(matcher))) {
          outpObj[contents.name] = contents;
        }

      }

    }

    return outpObj;
  }

  static isDotFile(name) {
    return name[0] == '.';
  }

  static isEmpty(obj) {
    return Object.keys(obj).length < 1;
  }

}


module.exports = BuildLib;
