const { myFunc, item: itemFromMyFunc } = require("./exim-myFunc");
const dataFromDB = require("./exim-data");

const item = "lalala";

console.log(itemFromMyFunc);
myFunc();
console.log(dataFromDB);
