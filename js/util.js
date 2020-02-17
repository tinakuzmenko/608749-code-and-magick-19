'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  window.util = {
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    randomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
