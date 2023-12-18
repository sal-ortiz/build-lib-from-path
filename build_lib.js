
const Path = require('path');
const File = require('fs');

const Configuration = require('./lib/configuration.js');
const Helpers = require('./lib/helpers.js');


class BuildLib {

  static get Configuration() {
    return Configuration
  }

  static fromPath(targPath, matcher) {
    let outpObj = {};

    let data = File.readdirSync(targPath);

    for (let idx = 0; idx < data.length; idx++) {
      let name = data[idx];
      let path = Path.join(targPath, name);
      let entry = File.lstatSync(path);

      if (entry.isDirectory()) {
        let contents = BuildLib.fromPath(path, matcher);

        if (!outpObj[name] && !Helpers.isEmpty(contents)) {
          let processedName = BuildLib.processLibName(name);

          outpObj[processedName] = contents;
        }

      } else if (entry.isFile() && !Helpers.isDotFile(name)) {
        let contents = require(path);

        if (contents.name && (!matcher || contents.name.match(matcher))) {
          let processedName = BuildLib.processLibName(contents.name);

          outpObj[processedName] = contents;
        }

      }

    }

    return outpObj;
  }

  static processLibName(name) {
    let outp = name;

    if (Helpers.isSnakeCase(name) == true) {

      if (Configuration.camelCaseNames == true) {
        outp = Helpers.toCamelCase(name);
      }

    } else {

      if (Configuration.snakeCaseNames == true) {
        outp = Helpers.toSnakeCase(name);
      }

    }

    let prefix = Configuration.namePrefix;
    let suffix = Configuration.nameSuffix;

    return prefix + outp + suffix;
  }

}


module.exports = BuildLib;
