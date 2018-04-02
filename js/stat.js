'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var CLOUD_GAP = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
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

var getMaxElement = function (arr) {
  if (arr.length === 0) {
    return Infinity;
  }

  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getColor = function () {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)', GAP);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', 0);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var color = getColor();
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_GAP + FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_GAP + TEXT_HEIGHT * 2 + (BAR_HEIGHT - barHeight - TEXT_HEIGHT) + GAP);
    ctx.fillText(players[i], CLOUD_X + CLOUD_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_GAP + TEXT_HEIGHT * 3 + BAR_HEIGHT);
    ctx.fillRect(CLOUD_X + CLOUD_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_GAP + TEXT_HEIGHT * 2 + (BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
  }
};
