import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const filMap = numbers.map(num => num * 10);
console.log(filMap);

function double(x) {
  return x + 2;
}
const sec = numbers.map(double);
console.log(sec);

var emp = [];
numbers.forEach(function(x) {
  emp.push(x);
});

console.log(emp);
//Filter - Create a new array by keeping the items that return true.

const fil = numbers.filter(x => x > 10);
console.log(fil);

//Reduce - Accumulate a value by doing something to each item in an array.

const sum = numbers.reduce((acc, iniVal) => {
  return acc + iniVal;
});
console.log(sum);
//Find - find the first item that matches from an array.
const data = numbers.find(x => x == 2);
console.log(data);
//FindIndex - find the index of the first item that matches.
const abc = numbers.findIndex(x => x == 2);
console.log(abc);

const mean = emojipedia.map(x => {
  return x.meaning.substring(0, 100);
});
console.log(mean);
