const numbers = [1, 3, 4, 6, 8];

const postiveNumbers = numbers.filter(x => x > 0);

postiveNumbers.forEach(element => {
  console.log(element);
});