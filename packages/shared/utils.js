export function* range(start, stop, step) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}
