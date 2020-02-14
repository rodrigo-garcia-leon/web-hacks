async function installPaintWorklet() {
  if ('paintWorklet' in CSS) {
    try {
      await CSS.paintWorklet.addModule('/packages/specialization-insects/paint-worklet.js');
    } catch (error) {
      console.error(error);
    }
  }
}

installPaintWorklet();
