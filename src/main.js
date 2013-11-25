"use strict";
require.config({
  baseUrl: ".",
  paths: {
    // 3rd Party
    "jquery": "src/third_party/jquery-1.10.2/jquery",
    "text": "src/third_party/text-2.0.10/text",
    "underscore": "src/third_party/underscore-1.5.2/underscore",
    "backbone": "src/third_party/backbone-1.1.0/backbone"
  },

  // 3rd party scripts which are non-AMD compatible
  shim: {
    "underscore": {
      exports: "_"
    },

    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    "jquery": {
      exports: "$"
    }
  }
});

require([
  "src/scripts/view/console4"
], function(Console) {
  /* Main entry point */
  var application = new Console();
  application.hello();
});
