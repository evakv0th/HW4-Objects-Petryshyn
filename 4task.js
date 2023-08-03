function getArrayIntersection(arr1, arr2) {
    let resultArr = [];
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    for (let i=0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            resultArr.push(arr1[i])
        }
    }
    return resultArr;
} else {
    throw new Error("arguments should be 2 arrays");
  }
}

const a = [1,2,3,4,5,6,7,'a', {a:'2'}]
const b = [0,0,0,2,4,5,'a', {a:'2'}]

console.log(getArrayIntersection(a,b))