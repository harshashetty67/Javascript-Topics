const numbers = [1, 3, 4, 6, 8, -5, 20];

const postiveNumbers = numbers.filter(x => x > 0); // filter() => getting only positive number.

const squareNum = numbers.map(n => n * n); // map() => getting the square of a number.

let sum = numbers.reduce((result, currentVal) => result + currentVal); // reduce() => calculate sum.

squareNum.forEach(element => {
  console.log(element);
});

console.log(sum);

/*
scope of var,let and const:
==========================
var -> function
let,const -> block where they defined

*/

/*function First() {
  var i = 0;
  function second() {
    var j = 2;
  }
  console.log(i);
}
console.log(i);
First(); */