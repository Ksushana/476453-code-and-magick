
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx) {

};


window.renderStatistics = function(ctx, players, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.beginPath();
  ctx.moveTo(110, 60);
  ctx.quadraticCurveTo(110,10,210,30);
  ctx.moveTo(210, 30);
  ctx.quadraticCurveTo(260,10,310,35);
  ctx.moveTo(310, 35);
  ctx.quadraticCurveTo(360, 10, 410,45);
  ctx.moveTo(410, 45);
  ctx.quadraticCurveTo(460,10,510,20);
  ctx.moveTo(510, 20);
  ctx.quadraticCurveTo(560,10,610,40);
  ctx.moveTo(610, 40);
  ctx.quadraticCurveTo(710,110,680,160);
  ctx.moveTo(680, 160);
  ctx.quadraticCurveTo(710,230,610,260);
  ctx.moveTo(610, 260);
  ctx.quadraticCurveTo(560,310,460,260);
  ctx.moveTo(460, 260);
  ctx.quadraticCurveTo(380,290,310, 260);
  ctx.moveTo(310, 260);
  ctx.quadraticCurveTo(260,310,210, 260);
  ctx.moveTo(210, 260);
  ctx.quadraticCurveTo(160,340,110, 260);
  ctx.moveTo(110, 260);
  ctx.quadraticCurveTo(50, 240, 80, 195);
  ctx.moveTo(80, 195);
  ctx.quadraticCurveTo(30, 170, 50, 125);
  ctx.moveTo(50, 125);
  ctx.quadraticCurveTo(30,50, 110, 60);
  ctx.moveTo(110, 60);

  // ctx.closePath();
ctx.fill();
  ctx.stroke();


  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.quadraticCurveTo(150,0,200,20);
  ctx.moveTo(200, 20);
  ctx.quadraticCurveTo(250,0,300,25);
  ctx.moveTo(300, 25);
  ctx.quadraticCurveTo(350,0,400,35);
  ctx.moveTo(400, 35);
  ctx.quadraticCurveTo(450,0,500,10);
  ctx.moveTo(500, 10);
  ctx.quadraticCurveTo(550,0,600,30);
  ctx.moveTo(600, 30);
  ctx.quadraticCurveTo(700,100,670,150);
  ctx.moveTo(670, 150);
  ctx.quadraticCurveTo(700,220,600,250);
  ctx.moveTo(600, 250);
  ctx.quadraticCurveTo(550,300,450,250);
  ctx.moveTo(450, 250);
  ctx.quadraticCurveTo(370,280,300, 250);
  ctx.moveTo(300, 250);
  ctx.quadraticCurveTo(250,300,200, 250);
  ctx.moveTo(200, 250);
  ctx.quadraticCurveTo(150,330,100, 250);
  ctx.moveTo(100, 250);
  ctx.quadraticCurveTo(40, 230, 70, 185);
  ctx.moveTo(70, 185);
  ctx.quadraticCurveTo(20, 160, 40, 115);
  ctx.moveTo(40, 115);
  ctx.quadraticCurveTo(20,40, 100, 50);
  ctx.moveTo(100, 50);

ctx.fill();
// ctx.closePath();
  ctx.stroke();


  ctx.fillStyle = '#000';

 for (var i = 0; i < players.length; i++) {
   ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, barWidth, BAR_HEIGHT);
 }
}
