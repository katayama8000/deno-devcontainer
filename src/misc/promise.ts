export const tmp = [];

const promiseFunc = () =>
  new Promise((resolve, reject) => {
    // reject("error");
    throw new Error("error");
  });

const main = async () => {
  console.time("func");
  try {
    promiseFunc();
  } catch (err) {
    console.log("-----", err, "-----");
  }
  console.timeEnd("func");
};

main();
