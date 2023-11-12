// let result;
// // const angka1 = 10;
// // const angka2 = 12;

// const calculate = (a, b) => a + b;

// const message = () => {
//   result = "async nih";
//   console.log("Async");
// };

// // anggap aja di set timeout ini dia get value a dan b untuk di calculate
// // dan ada heavy calculation untuk get a dan b
// setTimeout(calculate, 3000);
// console.log(result);

// const axios = require("axios");

// const load = async (apiEndpoint, callbackFn) => {
//   const result = await axios.get(apiEndpoint);

//   // if (!result.status !== 200) {
//   //   throw new Error(`An error occurred: ${result.status}`);
//   // }

//   // at this point, we have a good result:
//   const jsonObj = await result.data;
//   // run our callback function, passing in that object
//   callbackFn(jsonObj);
// };

// const displayer = (value) => {
//   console.log(value);
// };

// load("https://jsonplaceholder.typicode.com/todos", displayer);

// single threaded non blocking
// concurrent

// A -> B -------------> C --> D
// E -> F -> G -> H

console.log("a");
setTimeout(() => console.log("b"), 3000);
console.log("c");

// get Header
// send email ke usernya
// get Content 1 // isinya text
// get Contend 2 // isinya image
// get Content 3 // isinya video
// get Footer
