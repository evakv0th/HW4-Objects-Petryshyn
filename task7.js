function validateObject(obj, schema) {
  if (
    Object.getOwnPropertyNames(obj).length !==
    Object.getOwnPropertyNames(schema).length
  ) {
    return false;
  }

  for (let property in schema) {
    if (
      !obj.hasOwnProperty(property) ||
      typeof obj[property] !== schema[property]
    ) {
      return false;
    }
  }
  return true;
}

const obj = { name: "Michael", isBlonde: true, age: 40 };

const schema = {
  name: "string",
  age: "number",
  isBlonde: "boolean",
};

console.log(validateObject(obj, schema));
