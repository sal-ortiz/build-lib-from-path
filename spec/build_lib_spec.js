
const Path = require('path');

const supportPath = Path.join(__dirname, 'support');
const helpersPath = Path.join(supportPath, 'helpers');
const fixturesPath = Path.join(supportPath, 'fixtures');
const stubPath = Path.join(fixturesPath, 'path');

const BuildLib = require(Path.join(__dirname, '..', 'build_lib.js'));
const Expectations = require(Path.join(supportPath, 'expectations.js'));
const SpecHelper = require(Path.join(helpersPath, 'spec.js'));



describe('BuildLib', () => {

  beforeEach(() => {
   jasmine.addMatchers(SpecHelper.matchers);
  });

  afterEach(() => {
    BuildLib.Configuration.namePrefix = undefined;
    BuildLib.Configuration.nameSuffix = undefined;
  });

  describe('the fromPath(...) function', () => {
    let result;

    describe('given no matcher', () => {

      beforeEach(() => {
        result = BuildLib.fromPath(stubPath);
      });

      describe('given the camelCaseNames config option', () => {

        it('returns all of the found classes', () => {
          let expectation = Expectations.AllClasses.CamelCase;

          expect(result).toEqual(expectation)
        });

      });

      describe('given the snakeCaseNames config option', () => {

        beforeAll(() => {
          BuildLib.Configuration.snakeCaseNames = true;
        });

        it('returns all of the found classes', () => {
          let expectation = Expectations.AllClasses.SnakeCase;

          expect(result).toEqual(expectation)
        });

      });

      describe('given a defined prefix', () => {

        beforeAll(() => {
          BuildLib.Configuration.namePrefix = 'PREFIX';
          BuildLib.Configuration.nameSuffix = undefined;

          BuildLib.Configuration.camelCaseNames = true;
        });

        it('returns all of the found classes', () => {
          let expectation = Expectations.AllClasses.WithPrefix;

          expect(result).toEqual(expectation)
        });

      });

      describe('given a defined suffix', () => {

        beforeAll(() => {
          BuildLib.Configuration.nameSuffix = 'SUFFIX';
          BuildLib.Configuration.namePrefix = undefined;

          BuildLib.Configuration.camelCaseNames = true;
        });

        it('returns all of the found classes', () => {
          let expectation = Expectations.AllClasses.WithSuffix;

          expect(result).toEqual(expectation)
        });

      });

      it('ignores classes that have no exports', () => {
        // NOTE: our stub path's index contains an empty js file so we just
        //       make sure that there are no undefined keys in our results.
        let matched = SpecHelper.containsUndefinedKeys(result);

        expect(matched).toBe(false);
      });

    });

    describe('given a string matcher', () => {

      beforeEach(() => {
        result = BuildLib.fromPath(stubPath, 'Controller');
      });

      it('returns all classes found with a literal string match', () => {
        let expectation = Expectations.ControllerClassesOnly;

        expect(result).toEqual(expectation)
      });

      it('ignores classes that have no exports', () => {
        // NOTE: our stub path's index contains an empty js file so we just
        //       make sure that there are no undefined keys in our results.
        let matched = SpecHelper.containsUndefinedKeys(result);

        expect(matched).toBe(false);
      });

    });

    describe('given a regular expression matcher', () => {

      beforeEach(() => {
        result = BuildLib.fromPath(stubPath, /^\w+Helper$/);
      });

      it('returns all classes found with a regex match', () => {
        let expectation = Expectations.HelperClassesOnlyNoBase;

        expect(result).toEqual(expectation)
      });

      it('ignores classes that have no exports', () => {
        // NOTE: our stub path's index contains an empty js file so we just
        //       make sure that there are no undefined keys in our results.
        let matched = SpecHelper.containsUndefinedKeys(result);

        expect(matched).toBe(false);
      });

    });

  });

});
