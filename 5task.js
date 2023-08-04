// 5.1
function measureArrayPerformance(callback, array) {
  const start = Date.now();
  if (typeof callback !== "function" || !Array.isArray(array)) {
    throw new Error("arguments should be callback and array");
  }

  callback(array);
  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}

function testArr(array) {
  if (Array.isArray(array)) {
    const result = [];
    for (let item of array) {
      result.push(item + "test");
    }
    return result;
  } else {
    throw new Error("not array");
  }
}

const a = [1, 2, 3, 4, "fa"];

for (let i = 0; i < 1000000; i++) {
  a.push(i);
}
const b = [...a];
measureArrayPerformance(testArr, a);

// 5.2
// measuring for...of+push and map
const start = Date.now();
const res = b.map((item) => item+='test')
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
