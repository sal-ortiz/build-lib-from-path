

const Path = require('path');
const fixturesPath = Path.join(__dirname, 'fixtures', 'path');

const ControllerBase = require(Path.join(fixturesPath, 'controllers', 'base.js'));
const ProductController = require(Path.join(fixturesPath, 'controllers', 'product.js'));
const UserControllerBase = require(Path.join(fixturesPath, 'controllers', 'user', 'base.js'));
const UserActionsController = require(Path.join(fixturesPath, 'controllers', 'user', 'actions.js'));

const HelperBase = require(Path.join(fixturesPath, 'helpers', 'base.js'));
const UserHelper = require(Path.join(fixturesPath, 'helpers', 'user.js'));
const ProductHelper = require(Path.join(fixturesPath, 'helpers', 'product.js'));
const ActionsHelperBase = require(Path.join(fixturesPath, 'helpers', 'actions', 'base.js'));
const PunchHelper = require(Path.join(fixturesPath, 'helpers', 'actions', 'punch.js'));
const KickHelper = require(Path.join(fixturesPath, 'helpers', 'actions', 'kick.js'));

const Index = require(Path.join(fixturesPath, 'index.js'));



module.exports = {

  AllClasses: {
    Helpers: {
      HelperBase: HelperBase,
      UserHelper: UserHelper,
      ProductHelper: ProductHelper,
      Actions: {
        HelperBase: ActionsHelperBase,
        PunchHelper: PunchHelper,
        KickHelper: KickHelper,
      },

    },

    Controllers: {
      ControllerBase: ControllerBase,
      ProductController: ProductController,
      User: {
        UserControllerBase: UserControllerBase,
        ActionsController: UserActionsController,
      },

    },

  },

  ControllerClassesOnly: {
    Controllers: {
      ControllerBase: ControllerBase,
      ProductController: ProductController,
      User: {
        UserControllerBase: UserControllerBase,
        ActionsController: UserActionsController,
      },

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
    Helpers: {
      UserHelper: UserHelper,
      ProductHelper: ProductHelper,
      Actions: {
        PunchHelper: PunchHelper,
        KickHelper: KickHelper,
      },

    },

  },


};
