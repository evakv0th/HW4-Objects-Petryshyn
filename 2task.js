function chunkArray(array, chunkSize) {
  if (!Array.isArray(array) || typeof chunkSize !== "number" || isNaN(chunkSize)) {
    throw new Error(
      "arguments should be array and number which is size of a single chunk"
    );
  }
  let chunkedArray = [];
  for (let i = 0; i < array.length; i+=chunkSize) {
    let chunk = array.slice(i, i+chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(chunkArray(a,3))
