const add = (a: number, b: number): number => a + b;

// カリー化
const addCurried = (a: number) => (b: number): number => a + b;

console.log(add(1, 2));
console.log(addCurried(1)(2));
const val = addCurried(1);
console.log(val(2));
