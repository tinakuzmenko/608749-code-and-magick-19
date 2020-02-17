'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var setupModal = document.querySelector('.setup');
  var userNameInput = setupModal.querySelector('.setup-user-name');

  var inputInvalidHandler = function (evt) {
    var target = evt.target;
    if (target.value.length < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
    } else if (target.value.length > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Имя не должно превышать ' + MAX_NAME_LENGTH + '-ти символов');
    } else {
      userNameInput.setCustomValidity('');
    }
  };

  userNameInput.addEventListener('invalid', inputInvalidHandler);
})();
