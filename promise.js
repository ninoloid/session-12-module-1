const tryPromise = new Promise((resolve, reject) => {
  let isError = true; // do something yg bisa return error true atau false
  if (isError) {
    reject("Process failed");
  }

  resolve("Success");
});

tryPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(`Something went wrong! ${err}`))
  .finally(() => console.log("pulang"));

let result;
const fetchData = async () => {
  fetch("https://dummyjson.com/products/123123")
    .then((res) => {
      const data = res.json();
      data.then((value) => {
        result = value;
        console.log(value);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData();
console.log(result);
