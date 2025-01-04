function makeRangeIterator(start, end, step) {
    let nextValue = start;
    return {
      next() {
        if (nextValue < end) {
          const value = nextValue;
          nextValue += step;
          return { value, done: false };
        }
        return { done: true };
      }
    };
}

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); 
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);


function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
}