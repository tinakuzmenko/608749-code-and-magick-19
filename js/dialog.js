'use strict';

(function () {
  var DEFAULT_SETUP_LEFT = '50%';
  var DEFAULT_SETUP_TOP = '80px';

  var setupModal = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupIcon = document.querySelector('.setup-open-icon');
  var setupClose = setupModal.querySelector('.setup-close');
  var setupForm = setupModal.querySelector('.setup-wizard-form');
  var setupSubmitButton = setupModal.querySelector('.setup-submit');
  var userNameInput = setupModal.querySelector('.setup-user-name');
  var dialogHandler = setupModal.querySelector('.upload');

  var closeSetupClickHandler = function () {
    setupModal.classList.add('hidden');
    document.removeEventListener('keydown', closeKeydownHandler);
  };

  var closeKeydownHandler = function (evt) {
    if (userNameInput !== document.activeElement && evt.key === window.util.ESC_KEY) {
      closeSetupClickHandler();
    }
  };

  var resetSetupCoords = function () {
    setupModal.style.left = DEFAULT_SETUP_LEFT;
    setupModal.style.top = DEFAULT_SETUP_TOP;
  };

  var openSetupClickHandler = function () {
    resetSetupCoords();
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', closeKeydownHandler);
  };

  setupOpen.addEventListener('click', openSetupClickHandler);
  setupIcon.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      openSetupClickHandler();
    }
  });

  setupClose.addEventListener('click', closeSetupClickHandler);
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closeSetupClickHandler();
    }
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var dialogMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupModal.style.top = (setupModal.offsetTop - shift.y) + 'px';
      setupModal.style.left = (setupModal.offsetLeft - shift.x) + 'px';
    };

    var dialogMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', dialogMouseMoveHandler);
      document.removeEventListener('mouseup', dialogMouseUpHandler);

      if (dragged) {
        var dialogClickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', dialogClickPreventDefaultHandler);
        };
        dialogHandler.addEventListener('click', dialogClickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', dialogMouseMoveHandler);
    document.addEventListener('mouseup', dialogMouseUpHandler);
  });

  var successHandler = function () {
    setupModal.classList.add('hidden');
    setupSubmitButton.textContent = 'Сохранить';
    setupSubmitButton.disabled = false;
  };

  var errorHandler = window.error.errorHandler;

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), successHandler, errorHandler);
    evt.preventDefault();
    setupSubmitButton.textContent = 'Данные отправляются...';
    setupSubmitButton.disabled = true;
  });
})();
