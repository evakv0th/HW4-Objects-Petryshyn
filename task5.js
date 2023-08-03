const { person } = require("./task1");

function observeObject(obj, callback) {
  return new Proxy(obj, {
    get(target, property) {
      callback(property, "get");
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      callback(property, "set");
      return Reflect.set(target, property, value);
    },
  });
}

const observedObj = observeObject(person, (property, action) => {
    console.log(`${property}, ${action} of the person`)
})

observedObj.age;
observedObj.age = 304;