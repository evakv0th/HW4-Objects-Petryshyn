const { person } = require("./task1");

function createImmutableObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("argument should be object");
  }
  for (const property in obj) {
    if (
      typeof obj[property] === "object" &&
      obj[property] !== null &&
      !Array.isArray(obj[property])
    ) {
      console.log("OBJECT DETECTED");
      createImmutableObject(obj[property]);
    } else if (Array.isArray(obj[property])) {
      console.log("ARRAY DETECTED");
      obj[property].forEach((value, index) => {
        Object.defineProperty(obj[property], index, {
          value,
          writable: false,
          configurable: false,
        });
      });
      Object.defineProperty(obj[property], "length", {
        writable: false,
        configurable: false,
      });
    }
    Object.defineProperty(obj, property, {
      writable: false,
      configurable: false,
    });
  }

  return obj;
}

const object = {
  a: "1",
  b: "2",
  c: "3",
  d: {
    f: "5",
    h: 5,
  },
  g: [6, 7, 8],
};

const immutableObj = createImmutableObject(object);

console.log(object.g);
immutableObj.g[2] = "a";
// immutableObj.g.push('a')
// immutableObj.g[4] = 'b';
console.log(object.g);

console.log(object.d);
immutableObj.d.f = 1;
console.log(object.d);

const immutablePerson = createImmutableObject(person);

console.log(immutablePerson.firstName);
immutablePerson.firstName = "f";
console.log(immutablePerson.firstName);
