
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

    SnakeCase: {

      helpers: {
        helper_base: HelperBase,
        user_helper: UserHelper,
        product_helper: ProductHelper,
        actions: {
          helper_base: ActionsHelperBase,
          punch_helper: PunchHelper,
          kick_helper: KickHelper,
        },

      },

      controllers: {
        controller_base: ControllerBase,
        product_controller: ProductController,
        user: {
          user_controller_base: UserControllerBase,
          actions_controller: UserActionsController,
        },

      },

    },

    CamelCase: {

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

    WithPrefix: {
      PREFIXHelpers: {
        PREFIXHelperBase: HelperBase,
        PREFIXUserHelper: UserHelper,
        PREFIXProductHelper: ProductHelper,
        PREFIXActions: {
          PREFIXHelperBase: ActionsHelperBase,
          PREFIXPunchHelper: PunchHelper,
          PREFIXKickHelper: KickHelper,
        },

      },

      PREFIXControllers: {
        PREFIXControllerBase: ControllerBase,
        PREFIXProductController: ProductController,
        PREFIXUser: {
          PREFIXUserControllerBase: UserControllerBase,
          PREFIXActionsController: UserActionsController,
        },

      },

    },

    WithSuffix: {
      HelpersSUFFIX: {
        HelperBaseSUFFIX: HelperBase,
        UserHelperSUFFIX: UserHelper,
        ProductHelperSUFFIX: ProductHelper,
        ActionsSUFFIX: {
          HelperBaseSUFFIX: ActionsHelperBase,
          PunchHelperSUFFIX: PunchHelper,
          KickHelperSUFFIX: KickHelper,
        },

      },

      ControllersSUFFIX: {
        ControllerBaseSUFFIX: ControllerBase,
        ProductControllerSUFFIX: ProductController,
        UserSUFFIX: {
          UserControllerBaseSUFFIX: UserControllerBase,
          ActionsControllerSUFFIX: UserActionsController,
        },

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
