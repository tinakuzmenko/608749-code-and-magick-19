'use strict';

(function () {
  var errorHandler = window.error.handler;

  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.addWizards((wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    })));
  };

  window.setup.eyesChangeHandler = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.setup.coatChangeHandler = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    coatColor = window.setup.Color.DEFAULT_COAT;
    eyesColor = window.setup.Color.DEFAULT_EYES;
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, errorHandler);
})();
