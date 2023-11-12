// const fetchData = async () => {
//   const data = await fetch("https://dummyjson.com/products/10");
//   const result = await data.json();
//   return result;
// };

// const run = async () => {
//   result = await fetchData();
//   console.log(result);
// };

// run();

const tryPromise = () => {
  return new Promise((resolve, reject) => {
    let isError = false; // do something yg bisa return error true atau false
    if (isError) {
      reject("Process failed");
    }

    resolve("Success");
  });
};

const tryAndCatch = async () => {
  try {
    const result = await tryPromise();
    console.log("Ini result:", result);
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  } finally {
    console.log("Pulang");
  }
};

tryAndCatch();
