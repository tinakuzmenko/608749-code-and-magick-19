'use strict';

(function () {
  var getRandomElement = window.util.getRandomElement;

  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = setupPlayer.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var coatInput = setupPlayer.querySelector('input[name="coat-color"]');

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesInput = setupPlayer.querySelector('input[name="eyes-color"]');

  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var fireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

  var Color = {
    WIZARDS_COATS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARDS_EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    WIZARDS_FIREBALLS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var wizard = {
    eyesChangeHandler: function () {},
    coatChangeHandler: function () {},
    Color: Color
  };

  var setNewFillColor = function (colors, wizardElement, input) {
    var newColor = getRandomElement(colors);
    wizardElement.style.fill = newColor;
    input.value = newColor;
  };

  var setNewBackgroundColor = function (colors, wizardElement, input) {
    var newColor = getRandomElement(colors);
    wizardElement.style.backgroundColor = newColor;
    input.value = newColor;
  };

  wizardCoat.addEventListener('click', function () {
    setNewFillColor(Color.WIZARDS_COATS, wizardCoat, coatInput);
    wizard.coatChangeHandler(wizardCoat.style.fill);
  });

  wizardEyes.addEventListener('click', function () {
    setNewFillColor(Color.WIZARDS_EYES, wizardEyes, eyesInput);
    wizard.eyesChangeHandler(wizardEyes.style.fill);
  });

  wizardFireball.addEventListener('click', function () {
    setNewBackgroundColor(Color.WIZARDS_FIREBALLS, wizardFireball, fireballInput);
  });

  window.setup = wizard;
})();
