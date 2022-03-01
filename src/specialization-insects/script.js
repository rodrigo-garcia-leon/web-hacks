async function installPaintWorklet() {
  if ('paintWorklet' in CSS) {
    try {
      await CSS.paintWorklet.addModule('/specialization-insects/paint-worklet.js');
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }
}

installPaintWorklet();
