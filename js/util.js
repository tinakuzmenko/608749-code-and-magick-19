'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  window.randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.util = {
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY
  };
})();
