const add = (a, b) => {
  // return akan mereturn value yg masuk ke try
  // throw akan mereturn value error yg masuk ke catch

  if (!a || !b || typeof a !== "number" || typeof b !== "number") {
    throw "Invalid input";
  }

  return a + b;
};

const tryAndCatch = () => {
  try {
    const result = add(1, "a");
    console.log("Ini result:", result);
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  } finally {
    console.log("Pulang");
  }
};

tryAndCatch();
