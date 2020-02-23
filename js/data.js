'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;

  var setupModal = document.querySelector('.setup');
  var similarWizardsList = setupModal.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var succesHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(createWizardElement(wizards[i]));
    }

    similarWizardsList.appendChild(fragment);

    setupModal.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = window.error.errorHandler;

  window.backend.load(succesHandler, errorHandler);
})();
