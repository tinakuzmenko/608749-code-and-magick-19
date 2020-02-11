'use strict';

var PLAYERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PLAYERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;
var ENTER_KEY = 'Enter';
var ESC_KEY = 'Escape';
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

// Поиск случайного элемента массива

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// Генерация и вывод похожих волшебников

var setupModal = document.querySelector('.setup');
var similarWizardsList = setupModal.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];

var createRandomWizard = function () {
  var randomWizard = {
    name: [getRandomElement(PLAYERS_NAMES), getRandomElement(PLAYERS_SURNAMES)].join(' '),
    coatColor: getRandomElement(WIZARDS_COATS),
    eyesColor: getRandomElement(WIZARDS_EYES)
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

// Открытие окна настройки персонажа

var setupOpenClickHandler = document.querySelector('.setup-open');
var setupIconClickHandler = document.querySelector('.setup-open-icon');
var setupCloseClickHandler = setupModal.querySelector('.setup-close');
var userNameInput = setupModal.querySelector('.setup-user-name');

var closeSetupModal = function () {
  setupModal.classList.add('hidden');
  document.removeEventListener('keydown', closeKeydownHandler);
};

var openSetupModal = function () {
  setupModal.classList.remove('hidden');
  document.addEventListener('keydown', closeKeydownHandler);
};

var closeKeydownHandler = function (evt) {
  if (userNameInput !== document.activeElement && evt.key === ESC_KEY) {
    closeSetupModal();
  }
};

setupOpenClickHandler.addEventListener('click', function () {
  openSetupModal();
});

setupIconClickHandler.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openSetupModal();
  }
});

setupCloseClickHandler.addEventListener('click', function () {
  closeSetupModal();
});

setupCloseClickHandler.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetupModal();
  }
});

// Валидация имени персонажа

var checkNameInputValidity = function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else if (target.value.length > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Имя не должно превышать ' + MAX_NAME_LENGTH + '-ти символов');
  } else {
    userNameInput.setCustomValidity('');
  }
};

userNameInput.addEventListener('invalid', checkNameInputValidity);

// Изменение настроек персонажа

var setupPlayer = document.querySelector('.setup-player');
var setupWizard = setupPlayer.querySelector('.setup-wizard');

var wizardCoatClickHandler = setupWizard.querySelector('.wizard-coat');
var coatInput = setupPlayer.querySelector('input[name="coat-color"]');

var wizardEyesClickHandler = setupWizard.querySelector('.wizard-eyes');
var eyesInput = setupPlayer.querySelector('input[name="eyes-color"]');

var wizardFireballClickHandler = setupPlayer.querySelector('.setup-fireball-wrap');
var fireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

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

wizardCoatClickHandler.addEventListener('click', function () {
  setNewFillColor(WIZARDS_COATS, wizardCoatClickHandler, coatInput);
});

wizardEyesClickHandler.addEventListener('click', function () {
  setNewFillColor(WIZARDS_EYES, wizardEyesClickHandler, eyesInput);
});

wizardFireballClickHandler.addEventListener('click', function () {
  setNewBackgroundColor(WIZARDS_FIREBALLS, wizardFireballClickHandler, fireballInput);
});
