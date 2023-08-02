const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperty(product, "price", {
  writable: false,
  enumerable: false,
});
Object.defineProperty(product, "quantity", {
  writable: false,
  enumerable: false,
});

console.log(Object.keys(product));
console.log(Object.getOwnPropertyNames(product));

function getTotalPrice(obj) {
  if (Object.getOwnPropertyNames(obj).includes("price" || "quantity")) {
    let priceDescriptor = Object.getOwnPropertyDescriptor(obj, "price");
    let quantityDescriptor = Object.getOwnPropertyDescriptor(obj, "quantity");
    return priceDescriptor.value * quantityDescriptor.value;
  } else {
    throw new Error("please pass object with price and quantity");
  }
}

console.log(getTotalPrice(product));

function deleteNonConfigurable(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    let propDescriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (propDescriptor.configurable) {
      delete obj[prop];
    } else {
        throw new Error(`property ${prop} is not configurable`)
    }
  } else {
    throw new Error(`object does not have ${prop} property`);
  }
}
const testObj = { a: "1", b: "2", c: "c" };
console.log(testObj);
// Object.defineProperty(testObj, 'a', {
//   configurable: false,
// });
deleteNonConfigurable(testObj, 'a');
console.log(testObj);
