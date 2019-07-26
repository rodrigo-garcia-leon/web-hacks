import { drawHorizontalLine, drawVerticalLine, range } from '../shared';

const xStart  = 10;
const xStep  = 20;
const xSpread  = 10;
const yInnerPadding = 10;
const yOuterPadding = 20;
const yPaddingStep = 2;
const yStart = 10;
const yStep = 20;
const ySpread = 10;

class ContainerBackgroundPainter {
  paint(ctx, { height, width }) {
    const xStop = width - xStart;
    const yStop = height - yStart;

    for (const y of range(yInnerPadding, yOuterPadding, yPaddingStep)) {
      drawHorizontalLine(ctx, xStart, xStop, xStep, y, ySpread);
    }

    for (const y of range(height - yOuterPadding, height - yInnerPadding, yPaddingStep)) {
      drawHorizontalLine(ctx, xStart, xStop, xStep, y, ySpread);
    }

    drawVerticalLine(ctx, yStart, yStop, yStep, xStart, xSpread);
    drawVerticalLine(ctx, yStart, yStop, yStep, xStop, xSpread);
  }
}

registerPaint('container-background', ContainerBackgroundPainter);
