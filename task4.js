const { person } = require("./task1");

function createImmutableObject(obj) {
  for (const property in obj) {
    if (typeof obj[property] === 'object' && obj[property] !== null) {
        console.log('OBJECT DETECTED')
        createImmutableObject(obj[property])
    }
    Object.freeze(obj);
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
immutableObj.g[3] = 1;
console.log(object.g);

console.log(object.d);
immutableObj.d.f = 1;
console.log(object.d);

const immutablePerson = createImmutableObject(person);

console.log(immutablePerson.firstName)
immutablePerson.firstName = 'f'
console.log(immutablePerson.firstName)
