const { person } = require("./task1");

function observeObject(obj, callback) {
  function observeProperty(target, property) {
    let value = target[property];
    Object.defineProperty(target, property, {
      get: function () {
        callback(property, "get");
        return value;
      },
      set: function (newValue) {
        callback(property, "set");
        value = newValue;
      },
      enumerable: true,
      configurable: true,
    });
  }

  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      observeProperty(obj, property);
    }
  }

  return obj;
}

const observedObj = observeObject(person, (property, action) => {
  console.log(`${property}, ${action} of the person`);
});

observedObj.age;
observedObj.age = 304;
