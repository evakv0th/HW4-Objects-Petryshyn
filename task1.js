const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  updateInfo: function (newObj) {
    for (const property in newObj) {
      if (person.hasOwnProperty(property)) {
        Object.defineProperty(person, property, {
          value: newObj[property],
          writable: false,
        });
      }
    }
  },
};


for (const property in person) {
  if (person.hasOwnProperty(property)) {
    Object.defineProperty(person, property, {
      writable: false,
    });
  }
}

person.firstName = "do";
console.log(person.firstName);

console.log(person);
person.updateInfo({ firstName: "Michael", lastName: "Scott" });
console.log(person);

Object.defineProperty(person, "address", {
  value: {},
  writable: false,
  enumerable: false,
});

person.address = "123";

console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));

module.exports = {person};