import { drawHorizontalLine } from '../shared/draw.js';
import { range } from '../shared/utils.js';

const xPadding = 20;
const yPadding = 20;
const yStep = 10;
const xStep = 20;
const ySpread = 20;

function draw(canvas) {
  const { height, width } = canvas;
  const xStart = xPadding;
  const xStop = width - xStart;
  const yStart = yPadding;
  const yStop = height - yStart;
  const ctx = canvas.getContext('2d');

  for (const y of range(yStart, yStop, yStep)) {
    drawHorizontalLine(ctx, xStart, xStop, xStep, y, ySpread);
  }
}

function run() {
  const canvas = document.getElementById('oceano-iridiscente');

  canvas.height = 800;
  canvas.width = window.innerWidth * 0.6;

  draw(canvas);
}

run();
