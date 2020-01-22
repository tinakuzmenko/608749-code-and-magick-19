'use strict';
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var SHADOW_GAP = 10;
var CONTENT_GAP = 30;
var CONTENT_X = CLOUD_X + CONTENT_GAP;
var CONTENT_Y = CLOUD_Y + CONTENT_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CONTENT_X, CONTENT_Y);
  ctx.fillText('Список результатов:', CONTENT_X, CONTENT_Y + CONTENT_GAP);

  ctx.fillText(names[0], CONTENT_X, 105);
  ctx.fillRect(180, 105, 380, 20);

  ctx.fillText(names[1], CONTENT_X, 145);
  ctx.fillRect(180, 145, 380, 20);

  ctx.fillText(names[2], CONTENT_X, 185);
  ctx.fillRect(180, 185, 380, 20);

  ctx.fillText(names[3], CONTENT_X, 225);
  ctx.fillRect(180, 225, 380, 20);
};
