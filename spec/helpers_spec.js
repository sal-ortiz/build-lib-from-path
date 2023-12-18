
const Path = require('path');

const Helpers = require(Path.join(__dirname, '..', 'lib', 'helpers.js'));


describe('Helpers', () => {

  describe('the isDotFile() function', () => {

    it('returns true given a dotfile name', () => {
      let result = Helpers.isDotFile('.filename');

      expect(result).toBeTruthy();
    });

    it('returns false given a dotfile name', () => {
      let result = Helpers.isDotFile('filename');

      expect(result).toBeFalsy();
    });

  });

  describe('the isEmpty() function', () => {

    it('returns true given an empty object', () => {
      let result = Helpers.isEmpty({});

      expect(result).toBeTruthy();
    });

    it('returns false given an nonempty object', () => {
      let result = Helpers.isEmpty({ one: 1 });

      expect(result).toBeFalsy();
    });

  });

  describe('the isSnakeCase() function', () => {

    it('returns true given a snake_case input', () => {
      let result = Helpers.isSnakeCase('snake_case');

      expect(result).toBeTruthy();
    });

    it('returns false given a CamelCase input', () => {
      let result = Helpers.isSnakeCase('CamelCase');

      expect(result).toBeFalsy();
    });

  });

  describe('the toSnakeCase() function', () => {

    it('converts a camelcase name to snakecase', () => {
      let result = Helpers.toSnakeCase('SnakeCase');

      expect(result).toEqual('snake_case');
    });

  });

  describe('the toCamelCase() function', () => {

    it('converts a camelcase name to snakecase', () => {
      let result = Helpers.toCamelCase('camel_case');

      expect(result).toEqual('CamelCase');
    });

  });





});
