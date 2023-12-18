

class Helpers {

  static isDotFile(name) {
    return name[0] == '.';
  }

  static isEmpty(obj) {
    return Object.keys(obj).length < 1;
  }

  static isSnakeCase(name) {
    let nameLen = name.length;

    for (let idx = 0; idx < nameLen; idx++) {
      let nameChar = name[idx];

      if ((nameChar != '_' ) && (nameChar == nameChar.toUpperCase())) {
        return false;
      }

    }

    return true;
  }

  static toSnakeCase(name) {
    let nameLen = name.length;
    let outp = Array.from(name);

    outp[0] = name[0].toLowerCase();

    for (let idx = 1; idx < nameLen; idx++) {
      let nameChar = name[idx];

      if (nameChar == nameChar.toUpperCase()) {
        let outpPos = idx + (outp.length - name.length);
        outp.splice(outpPos, 1, '_', name[idx].toLowerCase());
      }

    }

    return outp.join('').toLowerCase();
  }

  static toCamelCase(name, ignoreFirstChar) {
    let nameLen = name.length;
    let outp = Array.from(name);

    if (!ignoreFirstChar) {
      outp[0] = name[0].toUpperCase();
    }

    for (let idx = 1; idx < nameLen; idx++) {
      let nameChar = name[idx];

      if (nameChar == '_') {
        outp.splice(idx, 2, name[idx + 1].toUpperCase());
      }

    }

    return outp.join('');
  }

}


module.exports = Helpers;
