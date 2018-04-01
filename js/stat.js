'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
// var FONT_GAP = 15;
// var TEXT_WIDTH = 50;
// var BAR_HEIGHT = 20;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
//
var renderCloud = function (ctx, x, y, color, diff) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(150 + diff, 0 + diff, 200 + diff, 20 + diff);
  ctx.quadraticCurveTo(250 + diff, 0 + diff, 300 + diff, 25 + diff);
  ctx.quadraticCurveTo(350 + diff, 0 + diff, 400 + diff, 35 + diff);
  ctx.quadraticCurveTo(450 + diff, 0 + diff, 500 + diff, 10 + diff);
  ctx.quadraticCurveTo(550 + diff, 0 + diff, 600 + diff, 30 + diff);
  ctx.quadraticCurveTo(700 + diff, 100 + diff, 670 + diff, 150 + diff);
  ctx.quadraticCurveTo(700 + diff, 220 + diff, 600 + diff, 250 + diff);
  ctx.quadraticCurveTo(550 + diff, 300 + diff, 450 + diff, 250 + diff);
  ctx.quadraticCurveTo(370 + diff, 280 + diff, 300 + diff, 250 + diff);
  ctx.quadraticCurveTo(250 + diff, 300 + diff, 200 + diff, 250 + diff);
  ctx.quadraticCurveTo(150 + diff, 330 + diff, 100 + diff, 250 + diff);
  ctx.quadraticCurveTo(40 + diff, 230 + diff, 70 + diff, 185 + diff);
  ctx.quadraticCurveTo(20 + diff, 160 + diff, 40 + diff, 115 + diff);
  ctx.quadraticCurveTo(20 + diff, 40 + diff, 100 + diff, 50 + diff);

  ctx.fill();
  ctx.closePath();
  ctx.stroke();
};

window.renderStatistics = function (ctx) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)', GAP);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', 0);
};


//   ctx.fillStyle = '#000';
//
//  for (var i = 0; i < players.length; i++) {
//    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
//    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, barWidth, BAR_HEIGHT);
//  }
// }
