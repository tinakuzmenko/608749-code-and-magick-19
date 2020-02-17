'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = setupPlayer.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var coatInput = setupPlayer.querySelector('input[name="coat-color"]');

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesInput = setupPlayer.querySelector('input[name="eyes-color"]');

  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var fireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

  var setNewFillColor = function (colors, wizardElement, input) {
    var newColor = window.util.randomElement(colors);
    wizardElement.style.fill = newColor;
    input.value = newColor;
  };

  var setNewBackgroundColor = function (colors, wizardElement, input) {
    var newColor = window.util.randomElement(colors);
    wizardElement.style.backgroundColor = newColor;
    input.value = newColor;
  };

  wizardCoat.addEventListener('click', function () {
    setNewFillColor(window.color.WIZARDS_COATS, wizardCoat, coatInput);
  });

  wizardEyes.addEventListener('click', function () {
    setNewFillColor(window.color.WIZARDS_EYES, wizardEyes, eyesInput);
  });

  wizardFireball.addEventListener('click', function () {
    setNewBackgroundColor(window.color.WIZARDS_FIREBALLS, wizardFireball, fireballInput);
  });
})();
