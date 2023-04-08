function countDuration(callback, ...args) {
  const start = Date.now();
  callback(...args);
  const end = Date.now();
  return end - start;
}
