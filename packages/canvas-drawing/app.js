const xPadding = 20;
const yPadding = 20;
const yStep = 8;
const xStep = 20;
const ySpread = 20;

function drawLine(ctx, xStart, xStop, y) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';

  let yStart = y, yStop;

  for (let x = xStart; x <= xStop; x += xStep) {
    yStop = y + ySpread * (Math.random() - 0.5);

    ctx.beginPath();
    ctx.moveTo(x, yStart);
    ctx.lineTo(x + xStep, yStop);
    ctx.stroke();

    yStart = yStop;
  }
}

function draw(canvas) {
  const ctx = canvas.getContext('2d');

  const { height, width } = canvas;
  const xStart = xPadding;
  const xStop = width - xStart;
  const yStart = yPadding;
  const yStop = height - yStart;

  for (let y = yStart; y <= yStop; y += yStep) {
    drawLine(ctx, xStart, xStop, y);
  }
}

function run() {
  const canvas = document.getElementById('canvas-drawing');

  canvas.height = 800;
  canvas.width = 1400;

  draw(canvas);
}

run();
