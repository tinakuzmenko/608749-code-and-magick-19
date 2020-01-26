'use strict';

var PLAYERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PLAYERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var gameSetup = document.querySelector('.setup');
gameSetup.classList.remove('hidden');

var similarListElement = gameSetup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
var shownWizards = 4;

var getRandomElement = function (arr) {
  var arrRandomElement = Math.floor(Math.random() * Math.floor(arr.length - 1));
  return arr[arrRandomElement];
};

var createRandomWizard = function (wizardsArr, names, surnames, coats, eyes) {
  var randomWizard = {
    name: [getRandomElement(names), getRandomElement(surnames)].join(' '),
    coatColor: getRandomElement(coats),
    eyesColor: getRandomElement(eyes)
  };

  return wizardsArr.push(randomWizard);
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < shownWizards; i++) {
  createRandomWizard(wizards, PLAYERS_NAMES, PLAYERS_SURNAMES, WIZARDS_COATS, WIZARDS_EYES);
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

gameSetup.querySelector('.setup-similar').classList.remove('hidden');
