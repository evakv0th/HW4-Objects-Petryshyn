// 1
function getArrayIntersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("2 arguments must be arrays");
  }
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      resultArr.push(arr1[i]);
    } else if (typeof arr1[i] === "object" && arr1[i] !== null) {
      if (
        arr2.some((item) =>
          typeof item === "object"
            ? JSON.stringify(item) === JSON.stringify(arr1[i])
            : 0
        )
      ) {
        resultArr.push(arr1[i]);
      }
    }
  }
  return resultArr;
}

const a = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  "a",
  false,
  11n,
  42n,
  null,
  undefined,
  { a: 2 },
];
const b = [0, 0, 0, 2, 4, 5, "a", true, false, 42n, 23n, null, { a: 2 }];

console.log(getArrayIntersection(a, b));

// 2
function getArrayUnion(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("2 arguments must be arrays");
  }

  const joinArr = [...arr1, ...arr2];
  const uniqueArr = [];
  const uniqueSet = new Set();

  for (const i of joinArr) {
    if (typeof i === "object" && i !== null) {
      if (
        uniqueArr.some((item) =>
          typeof item === "object"
            ? JSON.stringify(item) === JSON.stringify(i)
            : 0
        )
      ) {
        continue;
      }
    }

    if (!uniqueSet.has(i)) {
      uniqueSet.add(i);
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}

console.log(getArrayUnion(a, b));
