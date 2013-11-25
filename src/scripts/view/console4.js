"use strict";

define([], function() {

  var Console = function() {
  };

  Console.prototype = {
    hello: function() {
      console.log("Hello World");
    }
  };

  return Console;
});
