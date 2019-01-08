

class SpecHelper {

  static containsUndefinedKeys(input) {
    let result = {};

    if ([undefined].includes(Object.keys(input))) {
      return true;
    }

    let matched = false;
    for (let key in input) {
      let val = input[key];

      if (!matched && val.constructor == Object) {
        matched = SpecHelper.containsUndefinedKeys(val);
      } else if (matched) {
        break;
      }

    }

    return matched;
  }


}


module.exports = SpecHelper;
