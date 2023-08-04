// Fisher-Yates shuffle
function customShuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error("please provide array for shuffling");
  }
  let i = array.length;
  while (--i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(customShuffle(a));
console.log(customShuffle(a));
console.log(customShuffle(a));
console.log(customShuffle(a));
console.log(customShuffle(a));
console.log(customShuffle(a));
