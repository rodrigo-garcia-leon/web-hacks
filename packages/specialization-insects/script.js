async function installPaintWorklet() {
  if ('paintWorklet' in CSS) {
    await CSS.paintWorklet.addModule('./paint-worklet.js');
  }
}

installPaintWorklet();
