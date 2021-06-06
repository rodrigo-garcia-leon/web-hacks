/* eslint-disable */

const BORDER_SIZE = 4;

class ArticlePainter {
  paint(ctx, { height, width }) {
    ctx.save();

    const gradient = ctx.createLinearGradient(0, 0, 1, height);
    gradient.addColorStop(0, '#12eae4');
    gradient.addColorStop(1, '#005257');

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, width, BORDER_SIZE); // top
    ctx.fillRect(width - BORDER_SIZE, 0, BORDER_SIZE, height); // right
    ctx.fillRect(0, height - BORDER_SIZE, width, BORDER_SIZE); // bottom
    ctx.fillRect(0, 0, BORDER_SIZE, height); // left

    ctx.restore();
  }
}

registerPaint('article', ArticlePainter);
