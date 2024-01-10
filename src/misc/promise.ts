export const tmp = [];

const promiseFunc = () =>
  new Promise((resolve, reject) => {
    // reject("error");
    throw new Error("error");
  });

const main = async () => {
  console.time("func");
  try {
    const val = await promiseFunc();
    console.log(val);
  } catch (err) {
    console.log(err);
  }
  console.timeEnd("func");
};

main();
