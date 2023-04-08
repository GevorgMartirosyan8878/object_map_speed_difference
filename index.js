function countDuration(callback, ...args) {
  const start = Date.now();
  callback(...args);
  const end = Date.now();
  return end - start;
}

const object = {};
const map = new Map();

function makeObjectOperation(start = 0, end) {
  for (let i = start; i < end; i++) {
    object[i] = i;
    delete object[i];
  }
}

function makeMapOperation(start = 0, end) {
  for (let i = start; i < end; i++) {
    map.set(i, i);
    map.delete(i);
  }
}

const objectOperationDuration = countDuration(makeObjectOperation, 0, 1000000);
const mapOperationDuration = countDuration(makeMapOperation,0, 1000000);

console.log(`Object operation duration: ${objectOperationDuration}ms`);
console.log(`Map operation duration: ${mapOperationDuration}ms`);