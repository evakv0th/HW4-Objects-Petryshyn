function deepCloneObject(obj) {
  const clonedObj = {};
  for (const property in obj) {
    if (typeof obj[property] === "object" && obj[property] !== null) {
      console.log("OBJECT DETECTED");
      deepCloneObject(obj[property]);
    }
    clonedObj[property] = obj[property];
  }

  return clonedObj;
}

const test = {
  f: 1,
  asd: [12, 42, 2, "f"],
  new: {
    b: 2,
    uy: {
      gd: [1, 2, 3, 4, "f"],
    },
  },
  d: "string",
};

const test2 = deepCloneObject(test);
console.log(test2);
console.log(test2.asd);
console.log(test2.new);
console.log(test2.new.uy.gd);
console.log(test2.d);
