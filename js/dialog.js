'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupIcon = document.querySelector('.setup-open-icon');
  var setupModal = document.querySelector('.setup');
  var setupClose = setupModal.querySelector('.setup-close');
  var userNameInput = setupModal.querySelector('.setup-user-name');

  var closeSetupClickHandler = function () {
    setupModal.classList.add('hidden');
    document.removeEventListener('keydown', closeKeydownHandler);
  };

  var closeKeydownHandler = function (evt) {
    if (userNameInput !== document.activeElement && evt.key === window.util.ESC_KEY) {
      closeSetupClickHandler();
    }
  };

  var openSetupClickHandler = function () {
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', closeKeydownHandler);
  };

  setupOpen.addEventListener('click', function () {
    openSetupClickHandler();
  });

  setupIcon.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      openSetupClickHandler();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetupClickHandler();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closeSetupClickHandler();
    }
  });
})();
