

const Path = require('path');
const fixturesPath = Path.join(__dirname, 'fixtures');

const ControllerBase = require(Path.join(fixturesPath, 'path', 'controllers', 'base.js'));
const UserController = require(Path.join(fixturesPath, 'path', 'controllers', 'user.js'));
const ProductController = require(Path.join(fixturesPath, 'path', 'controllers', 'product.js'));

const HelperBase = require(Path.join(fixturesPath, 'path', 'helpers', 'base.js'));
const UserHelper = require(Path.join(fixturesPath, 'path', 'helpers', 'user.js'));
const ProductHelper = require(Path.join(fixturesPath, 'path', 'helpers', 'product.js'));

const Index = require(Path.join(fixturesPath, 'path', 'index.js'));



module.exports = {

  AllClasses: {
    helpers: {
      HelperBase: HelperBase,
      UserHelper: UserHelper,
      ProductHelper: ProductHelper,
    },

    controllers: {
      ControllerBase: ControllerBase,
      UserController: UserController,
      ProductController: ProductController,
    },

  },

  ControllerClassesOnly: {
    controllers: {
      ControllerBase: ControllerBase,
      UserController: UserController,
      ProductController: ProductController,
    },

  },

//  HelperClassesOnly: {
//    helpers: {
//      HelperBase: HelperBase,
//      UserHelper: UserHelper,
//      ProductHelper: ProductHelper,
//    },
//
//  },

//  ControllerClassesOnlyNoBase: {
//    controllers: {
//      UserController: UserController,
//      ProductController: ProductController,
//    },
//
//  },

  HelperClassesOnlyNoBase: {
    helpers: {
      UserHelper: UserHelper,
      ProductHelper: ProductHelper,
    },

  },


};
