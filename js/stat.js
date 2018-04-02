'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
//
var renderCloud = function (ctx, x, y, color, diff) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(150 + diff, 0 + diff, 200 + diff, 5 + diff);
  ctx.quadraticCurveTo(250 + diff, 0 + diff, 300 + diff, 7 + diff);
  ctx.quadraticCurveTo(350 + diff, 0 + diff, 370 + diff, 10 + diff);
  ctx.quadraticCurveTo(410 + diff, 0 + diff, 460 + diff, 10 + diff);
  ctx.quadraticCurveTo(550 + diff, 0 + diff, 520 + diff, 50 + diff);
  ctx.quadraticCurveTo(550 + diff, 70 + diff, 540 + diff, 100 + diff);
  ctx.quadraticCurveTo(570 + diff, 170 + diff, 550 + diff, 200 + diff);
  ctx.quadraticCurveTo(570 + diff, 290 + diff, 500 + diff, 280 + diff);
  ctx.quadraticCurveTo(370 + diff, 290 + diff, 300 + diff, 280 + diff);
  ctx.quadraticCurveTo(250 + diff, 300 + diff, 200 + diff, 275 + diff);
  ctx.quadraticCurveTo(150 + diff, 285 + diff, 100 + diff, 270 + diff);
  ctx.quadraticCurveTo(40 + diff, 230 + diff, 70 + diff, 185 + diff);
  ctx.quadraticCurveTo(60 + diff, 160 + diff, 70 + diff, 115 + diff);
  ctx.quadraticCurveTo(60 + diff, 80 + diff, 100 + diff, 50 + diff);

  ctx.fill();
  ctx.closePath();
  ctx.stroke();
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)', GAP);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', 0);

  ctx.fillStyle = '#000';

  var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, barWidth, BAR_HEIGHT);
  }
};
