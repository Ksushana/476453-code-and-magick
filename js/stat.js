window.renderStatistics = function(ctx, names, times) {
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
  ctx.closePath();
  ctx.stroke();

}
