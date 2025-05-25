export {doubleNumbersInArray};
//Exercise #2 (sugerencia map())
/*
    Write a function that:
    ●	Takes in an array of numbers.
    ●	Doubles the value of each number in the array.
    ●	Prints out the new updated array.
    Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

// Exercise #2; Traditional Function
function doubleNumbersInArray(numbers) {
    const doubledNumbers = numbers.map(function(num) {
    return num * 2;
  });
  return doubledNumbers;
};
console.log(doubleNumbersInArray([1, 2, 4, 5]));

/**
 * EXERCISE #2.1; In Arrow function
 
const doubleNumbersInArray = (numbers) => {
  return numbers.map(num => num * 2);
  //const doubleNumbers = numbers.map(num => num * 2);
  //return doubleNumbers;
};
console.log(doubleNumbersInArray([1, 2, 4, 5]));
/*
    SINTAXIS OF .MAP
    let resultado = arreglo.map(function(elemento) {
        return elemento * 2;

                            O
    let resultado = arreglo.map(elemento => elemento * 2);
    });
*/