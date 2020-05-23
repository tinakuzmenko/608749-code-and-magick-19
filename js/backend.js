'use strict';

(function () {
  var TIMEOUT_IN_MS = 10000;
  var LOAD_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var SEND_URL = 'https://javascript.pages.academy/code-and-magick';

  var Code = {
    SUCCESS: 200,
    REQUEST_ERROR: 400,
    ACCESS_ERROR: 403,
    NOT_FOUND_ERROR: 404,
    SERVER_ERROR: 500,
    RESPONSE_ERROR: 502,
    SERVICE_UNAVIALABLE: 503
  };

  var processServerStatus = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === Code.SUCCESS) {
        onLoad(xhr.response);
      } else {
        switch (xhr.status) {
          case Code.REQUEST_ERROR:
            onError('Неверный запрос');
            break;
          case Code.ACCESS_ERROR:
            onError('Доступ запрещен');
            break;
          case Code.NOT_FOUND_ERROR:
            onError('Ничего не найдено');
            break;
          case Code.SERVER_ERROR:
            onError('Ошибка сервера');
            break;
          case Code.RESPONSE_ERROR:
            onError('Неверный ответ сервера');
            break;
          case Code.SERVICE_UNAVIALABLE:
            onError('Сервер временно недоступен');
            break;
          default:
            onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
        }
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
