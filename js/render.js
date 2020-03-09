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

  var addWizardsToFragment = function (wizards) {
    var shownWizards = wizards.length > WIZARDS_AMOUNT ? WIZARDS_AMOUNT : wizards.length;

    var fragment = document.createDocumentFragment();
    similarWizardsList.innerHTML = '';

    for (var i = 0; i < shownWizards; i++) {
      fragment.appendChild(createWizardElement(wizards[i]));
    }

    similarWizardsList.appendChild(fragment);

    setupModal.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    addWizards: addWizardsToFragment
  };
})();
