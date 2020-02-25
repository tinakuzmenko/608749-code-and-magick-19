'use strict';

(function () {
  var TIMEOUT_IN_MS = 10000;
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SEND_URL = 'https://js.dump.academy/code-and-magick';

  var processServerStatus = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 403:
          error = 'Доступ запрещен';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        case 500:
          error = 'Ошибка сервера';
          break;
        case 502:
          error = 'Неверный ответ сервера';
          break;
        case 503:
          error = 'Сервер временно недоступен';
          break;
        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };

  var load = function (onLoad, onError) {
    var xhrLoad = new XMLHttpRequest();
    processServerStatus(xhrLoad, onLoad, onError);
    xhrLoad.open('GET', LOAD_URL);
    xhrLoad.send();
  };

  var save = function (data, onLoad, onError) {
    var xhrSend = new XMLHttpRequest();
    processServerStatus(xhrSend, onLoad, onError);
    xhrSend.open('POST', SEND_URL);
    xhrSend.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
