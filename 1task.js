function customFilterUnique(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new Error('arguments should be array and filter function')
    }
  const uniqueArr = [];
  const uniqueSet = new Set();
  for (const i of array) {
    const value = callback(i);
    if (!uniqueSet.has(value)) {
      uniqueSet.add(value);
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 4, 4, 4];
const callback = (element) => element * 2;

console.log(customFilterUnique(array, callback));

const bankAccounts = [
  { id: 1, balance: 200, name: "Creed" },
  { id: 9, balance: 0, name: "Michael" },
  { id: 2, balance: 4100, name: "Jim" },
  { id: 3, balance: 1100, name: "Pam" },
  { id: 4, balance: 100, name: "Creed" },
  { id: 1.1, balance: 200, name: "Creed" },
  { id: 1.2, balance: 200, name: "Creed" },
];

const objCallback = (item) => item.name;

console.log(customFilterUnique(bankAccounts, objCallback));
