// console.log("a");
// console.log("b");
// console.log("c");

// let result;
// function greet(str) {
//   result = str;
// }

// function hello() {
//   greet("hello");
// }

// function arigatou() {
//   greet("arigatou");
// }

// arigatou();
// hello();
// console.log(result);

// first way
// const calc = (a, b) => {
//   return a + b;
// };

// const displayer = (value) => {
//   console.log(value);
// };

// const result = calc(4, 6);
// displayer(result);

// second way
// const displayer = (value) => {
//   console.log(value);
// };

// const calc = (a, b) => {
//   const result = a + b;
//   displayer(result);
// };

// calc(4, 6);

// logger
// const logger = (message) => {
//   const log = {
//     message: message,
//     currentTime: new Date(),
//   };

//   console.log(JSON.stringify(log));
// };

// const calc = (a, b, isLoggerActive = false) => {
//   if (isLoggerActive) {
//     logger(`first input: ${a}`);
//     logger(`second input: ${b}`);
//   }

//   const result = a + b;
//   if (isLoggerActive) {
//     logger(`result:, ${result}`);
//   }

//   return result;
// };

// calc(4, 7, true);

// const displayer = (value) => {
//   console.log(value);
// };

// const logger = () => {
//   const log = {
//     message: "hehehe",
//     currentTime: new Date(),
//   };

//   console.log(JSON.stringify(log));
// };

// function higherOrderFunc(callback) {
//   callback("lalala");
// }

// higherOrderFunc(displayer);
// higherOrderFunc(logger);
// // .sort // higher order func
// // (a, b) => a - b // callback
// const compareFn = (a,b) => a - b

// [].sort(compareFn);

// const nilai = [10, 20, 30];
// pengen jumlahin semuanya

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const sum = nilai.reduce(reducer, 0);
// console.log("sum:", sum);

// reducer(0, 10) -> return hasil kalkulasi -> 10
// reducer(10, 20) -> return hasil kalkulasi -> 30
// reducer(30, 30) -> return hasil kalkulasi -> 60

// const nilai = [10, 20, 30];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// let result = 0;
// for (let i = 0; i < nilai.length; i++) {
//   result = reducer(result, nilai[i]);
// }

// console.log(result);
