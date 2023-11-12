const newObj = {
  firstName: "ahmad",
  lastName: "adiputra",
  class: [1, 2, 3],
};

const stringifiedObj = JSON.stringify(newObj);
console.log(stringifiedObj);

// id  firstName   lastName    nilai   class -> string
// 1   "ahmad"     "adiputra"  70      '{ "x": "x - 1", "xi": "xi - 3" }'

// 1. ahmad. expect dapet object, nyatanya dapetnya string
const parsedObj = JSON.parse(stringifiedObj);
console.log(parsedObj);
