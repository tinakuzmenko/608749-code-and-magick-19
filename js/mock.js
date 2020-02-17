'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var PLAYERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var PLAYERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var setupModal = document.querySelector('.setup');
  var similarWizardsList = setupModal.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = [];

  var createRandomWizard = function () {
    var randomWizard = {
      name: [window.randomElement(PLAYERS_NAMES), window.randomElement(PLAYERS_SURNAMES)].join(' '),
      coatColor: window.randomElement(window.color.WIZARDS_COATS),
      eyesColor: window.randomElement(window.color.WIZARDS_EYES)
    };

    return randomWizard;
  };

  var pushElements = function (wizardsAmount) {
    var wizardsList = [];
    for (var i = 0; i < wizardsAmount; i++) {
      var wizard = createRandomWizard();
      wizardsList.push(wizard);
    }

    return wizardsList;
  };

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addToFragment = function (wizardsList) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsList.length; i++) {
      fragment.appendChild(createWizardElement(wizardsList[i]));
    }
    return fragment;
  };

  wizards = pushElements(WIZARDS_AMOUNT);
  similarWizardsList.appendChild(addToFragment(wizards));
  setupModal.querySelector('.setup-similar').classList.remove('hidden');
})();
