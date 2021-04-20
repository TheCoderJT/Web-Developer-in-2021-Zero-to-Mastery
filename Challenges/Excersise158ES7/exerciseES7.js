// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

console.log(dragons.includes("John")); //* False

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

const findName = (name) => {
  const find = dragons.includes(name) ? dragons.name : "Not Valid";
  return find;
};

console.log(findName("john")); //* Not Valid

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const toPow = (num) => {
  return num ** 100;
};

console.log(toPow(10)); //* outputs 2e+100 but think thats wrong.

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

const toPow = (num) => {
  return num ** 100;
};

console.log(toPow(10000)); // Infinity? umm
