function customFilterUnique(array, callback){
    const newArray = array.filter(callback);
    return newArray;
}
let array = [1,2,3,4,5,6,7,8]
let callback = (element) => element%2 === 0;

console.log(customFilterUnique(array, callback))