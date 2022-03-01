import { range } from './utils.js';

export function drawHorizontalLine(ctx, xStart, xStop, xStep, y, ySpread) {
  ctx.save();

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#12eae4';

  let yStart = y;
  let yStop;

  for (const x of range(xStart, xStop, xStep)) {
    yStop = y + ySpread * (Math.random() - 0.5);

    ctx.beginPath();
    ctx.moveTo(x, yStart);
    ctx.lineTo(x + xStep, yStop);
    ctx.stroke();

    yStart = yStop;
  }

  ctx.restore();
}

export function drawVerticalLine(ctx, yStart, yStop, yStep, x, xSpread) {
  ctx.save();

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#12eae4';

  let xStart = x;
  let xStop;

  for (const y of range(yStart, yStop, yStep)) {
    xStop = x + xSpread * (Math.random() - 0.5);

    ctx.beginPath();
    ctx.moveTo(xStart, y);
    ctx.lineTo(xStop, y + yStep);
    ctx.stroke();

    xStart = xStop;
  }

  ctx.restore();
}
