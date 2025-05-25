export{calculateSumAndProduct};
/*
    Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

/** 
 * OPTION 1: 2 diferents functions
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("The sum is", sum);
console.log("The product is", product);
*/

function calculateSumAndProduct(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  return { sum, product };
}

const numbers = [1, 2, 3, 4];
const result = calculateSumAndProduct(numbers);

console.log(result);


