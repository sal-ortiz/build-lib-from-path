


class Configuration {

  static #namePrefix;
  static #nameSuffix;
  static #camelCaseNames = true;

  static get namePrefix() {
    return this.#namePrefix || '';
  }

  static set namePrefix(val) {
    this.#namePrefix = val;
  }

  static get nameSuffix() {
    return this.#nameSuffix || '';
  }

  static set nameSuffix(val) {
    this.#nameSuffix = val;
  }

  static get camelCaseNames() {
    return this.#camelCaseNames;
  }

  static set camelCaseNames(val) {
    this.#camelCaseNames = val;
  }

  static get snakeCaseNames() {
    return !this.#camelCaseNames;
  }

  static set snakeCaseNames(val) {
    this.#camelCaseNames = !val
  }

}


module.exports = Configuration;
