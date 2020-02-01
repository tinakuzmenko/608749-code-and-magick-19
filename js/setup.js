'use strict';

var PLAYERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PLAYERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var setupModal = document.querySelector('.setup');

setupModal.classList.remove('hidden');

var similarWizardsList = setupModal.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createRandomWizard = function () {
  var randomWizard = {
    name: [getRandomElement(PLAYERS_NAMES), getRandomElement(PLAYERS_SURNAMES)].join(' '),
    coatColor: getRandomElement(WIZARDS_COATS),
    eyesColor: getRandomElement(WIZARDS_EYES)
  };

  return randomWizard;
};

var pushElements = function (wizardsAmount) {
  for (var i = 0; i < wizardsAmount; i++) {
    var wizard = createRandomWizard();
    wizards.push(wizard);
  }

  return wizards;
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

pushElements(WIZARDS_AMOUNT);
similarWizardsList.appendChild(addToFragment(wizards));
setupModal.querySelector('.setup-similar').classList.remove('hidden');
