"use strict";

define([
  "backbone"
], function(Backbone) {

  var Console = function() {
  };

  Console.prototype = {
    hello: function() {
      console.log("Hello World");
    }
  };

  return Console;
});
